import { User } from "../interfaces/user";
import { Storage } from "./storage";
import { TaskyApi } from "./taskyApi";

async function login(user: User) {
  const { body, status } = await TaskyApi.POST({
    route: "user/login",
    body: user,
  });

  if (status === 200) {
    Storage.save('access_token', body.authorization);
    return;
  }

  if (status === 401) {
    throw new Error("Email ou senha inválidos!");
  }
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

async function checkToken(token: string) {

}

function logout() {
  Storage.remove("access_token");
}
export const AuthServices = {
  login,
  logout,
  isLoggedIn
}