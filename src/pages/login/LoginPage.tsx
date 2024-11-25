import { MouseEvent, useState } from "react";
import { AuthServices } from "../../services/login";
import { GoogleLoginButton } from "./components/GoogleButton";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { AuthForm } from "../templates/AuthForm";
import { FormInput } from "../templates/FormInput";
import { goToPage } from "../../router";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (evt: MouseEvent) => {
    evt.preventDefault();

    try {
      await AuthServices.login({ email, password });
      goToPage("/");
    } catch (error: any) {
      alert(error.message);
    }
  }


  return (
    <>
      <section id="login-page">
        <div
          className="
          text-white
          text-center 
          flex flex-col items-center
          min-h-screen 
          w-[90%]
          max-w-[400px]
          mx-auto
          py-10 
          
          md:max-w-[320px]
          md:justify-center
          md:py-6
          "
        >
          <Logo textSize="text-4xl" />

          <AuthForm legend="Login" submitButton="Entrar" onSubmit={onLogin}>
            <FormInput
              type="email"
              placeholder="Email"
              onChange={(_email: string) => setEmail(_email)} />
            <FormInput
              type="password"
              placeholder="Password"
              onChange={(_pass: string) => setPassword(_pass)} />
          </AuthForm>

          <div className="px-2 w-full">
            <GoogleLoginButton />
            <Divider margins="my-8 lg:my-6" />
            <Button
              style="w-full rounded-full py-3 text-white md:text-sm"
              backgroundColor="bg-white bg-opacity-10 hover:bg-accent-transparent"
              border="border-accent-transparent border"
              onClick={() => { goToPage("/sign-up") }}
            >Cadastre-se</Button>
          </div>

        </div>
      </section>
    </>
  );
}