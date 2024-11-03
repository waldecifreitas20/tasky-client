import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { Divider } from "../../components/Divider";
import { GoogleLoginButton } from "../login/components/GoogleButton";
import { MouseEvent, useState } from "react";

interface AuthPageTemplateProps {
  isLoginMode: boolean;
  onSubmit: CallableFunction;
}

export function AuthPageTemplate(props: AuthPageTemplateProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputStyle = `
    outline-none 
    rounded-sm 
    bg-accent-transparent 
    light-placeholder 
    py-3 px-2 
    
    md:text-sm
  `;

  const texts = {
    formTitle: props.isLoginMode ? "Login" : "Faça Seu Cadastro",
    submitButton: props.isLoginMode ? "Entrar" : "Cadastrar",
    bottomButton: props.isLoginMode ? "Cadastre-se" : "Faça Login",
  }

  const redirectToPage = () => {
    location.pathname = props.isLoginMode ? "/sign-up" : "/login";
  }

  const onSubmit = (evt: MouseEvent) => {
    props.onSubmit(evt, { email, password });
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

          <form
            className="
            mt-16
            mb-10
            w-full
            bg-primary-transparent
            px-2 py-4
            rounded-md

            md:mt-8
        ">
            <legend className="text-2xl">{texts.formTitle}</legend>
            <div className="my-10 gap-2 flex flex-col text-white">
              <input
                className={inputStyle}
                type="email"
                required
                placeholder="Email"
                onChange={(evt) => { setEmail(evt.target.value); }}
              />
              <input
                className={inputStyle}
                type="password"
                required
                placeholder="Senha"
                onChange={(evt) => { setPassword(evt.target.value); }}
              />
            </div>

            <Button isSubmit
              style="w-full py-3 font-normal md:text-sm"
              onClick={onSubmit}
            >{texts.submitButton}</Button>

          </form>

          <div className="px-2 w-full">
            {
              props.isLoginMode ?
                <GoogleLoginButton /> : <></>
            }

            <Divider margins="my-10 lg:my-6" />
            <Button
              style="w-full rounded-full py-3 text-white md:text-sm"
              backgroundColor="bg-white bg-opacity-10 hover:bg-accent-transparent"
              border="border-accent-transparent border"
              onClick={redirectToPage}
            >{texts.bottomButton}
            </Button>
          </div>

        </div>
      </section>
    </>
  );
}