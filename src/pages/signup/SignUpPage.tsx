import { MouseEvent, useState } from "react";
import { AuthServices } from "../../services/login";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { AuthForm } from "../templates/AuthForm";
import { FormInput } from "../templates/FormInput";
import { goToPage } from "../../router";

export function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = async (evt: MouseEvent) => {
    evt.preventDefault();

    try {
      await AuthServices.login({ email, password });
      goToPage("/sign-up");
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

          <AuthForm legend="Login" submitButton="Entrar" onSubmit={onSignUp}>
            <FormInput
              type="text"
              placeholder="Nome"
              onChange={(_name: string) => setName(_name)} />
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
            <Divider margins="my-0 lg:my-4" />
            <Button
              style="w-full rounded-full py-3 text-white md:text-sm"
              backgroundColor="bg-white bg-opacity-10 hover:bg-accent-transparent"
              border="border-accent-transparent border"
              onClick={() => { goToPage("/login") }}
            >Faça Login</Button>
          </div>

        </div>
      </section>
    </>
  );
}