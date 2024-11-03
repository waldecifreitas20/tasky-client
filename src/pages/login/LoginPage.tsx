import { MouseEvent } from "react";
import { AuthPageTemplate } from "../templates/AuthPage";
import { User } from "../../interfaces/user";
import { AuthServices } from "../../services/login";

export function LoginPage() {
  const onLogin = async (evt: MouseEvent, user: User) => {
    evt.preventDefault();

    try {
      await AuthServices.login(user);
      location.pathname = "/";
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <>
      <AuthPageTemplate isLoginMode onSubmit={onLogin} />
    </>
  );
}