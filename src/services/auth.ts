import { UserCredentials, UserData } from "../interfaces/user";
import { Storage } from "./storage";
import { TaskyApi } from "./taskyApi";

const saveCredentials = (accessToken: string, username: string) => {
  Storage.save('access_token', accessToken);
  Storage.save('username', username);
}

type LoginResponse = {
  authorization: string,
  username: string
}

const handleLoginResponse = (
  httpStatus: number,
  response: LoginResponse
) => {

  if (httpStatus === 200) {
    return saveCredentials(response.authorization, response.username);
  }

  if (httpStatus === 401) {
    throw new Error("Email ou senha inválidos!");
  }

  throw new Error("Não é possível realizar login. Verifique sua conexão");
}


async function signUp(user: UserData) {
    const { status, body } = await TaskyApi.POST({
      route: "user/sign-up",
      body: user,
    });
    console.log(status);
    console.log(body.error);


    if (status === 200) {
      saveCredentials(body.authorization, body.username);
      return;
    }
    console.log(body.error);
    
    if (status === 400) {
      throw new Error("Conta de usuário já existente. Tente fazer login");
    }
 
    throw new Error("Não é possível realizar cadastro. Verifique sua conexão");
}

async function login(user: UserCredentials) {
  const { body, status } = await TaskyApi.POST({
    route: "user/login",
    body: user,
  });

  return handleLoginResponse(status, body);
}

async function loginWithGoogle(googleToken: string) {
  const { body, status } = await TaskyApi.POST({
    route: 'user/google-auth',
    authorization: googleToken,
  });

  return handleLoginResponse(status, body);
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
  loginWithGoogle,
  signUp,
}