import { User } from "../interfaces/user";
import { Storage } from "./storage";
import { TaskyApi } from "./taskyApi";

const saveCredentials = (accessToken: string, username: string) => {
  Storage.save('access_token', accessToken);
  Storage.save('username', username);
}

async function login(user: User) {
  const { body, status } = await TaskyApi.POST({
    route: "user/login",
    body: user,
  });

  if (status === 200) {
    return saveCredentials(body.authorization, body.username);
  }
  
  throw new Error("Email ou senha inválidos!");
}

async function loginWithGoogle(googleToken: string) {
  const { body, status } = await TaskyApi.POST({
    route: 'user/google-auth',
    authorization: googleToken,
  });

  if (status === 200) {
    return saveCredentials(body.authorization, body.username);
  }

  throw new Error("Email ou senha inválidos!");
}

async function isLoggedIn() {
  const token = Storage.get('access_token') ?? "";
  if (token === "") {
    return false;
  }


  try {
    const { status } = await TaskyApi.GET({
      route: "user/check-token",
      authorization: token,
    });

    return status === 200;
  } catch (error) {
    console.log(error);
  }
}

function logout() {
  Storage.remove("access_token");
}

export const AuthServices = {
  login,
  logout,
  isLoggedIn,
  loginWithGoogle
}