import { User } from "../interfaces/user";
import { Storage } from "./storage";

async function login(user: User) {
  const { body, status } = await fetch("http://localhost:3000/user/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(async response => {
    return {
      status: response.status,
      body: await response.json()
    };
  });
  console.log(status);
  
  if (status === 200) {
    Storage.save('access_token', body.authorization);
    return;
  }

  if (status === 401) {
    throw new Error("Email ou senha inválidos!");
  }
}

export const AuthServices = {
  login,
}