import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { Divider } from "../../components/Divider";

interface AuthPageTemplateProps {
  isLoginMode: boolean;
  onSubmit?: VoidFunction;
}

export function AuthPageTemplate(props: AuthPageTemplateProps) {
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
                type="text"
                placeholder="Nome de Usuário" />
              <input
                className={inputStyle}
                type="password"
                placeholder="Senha" />
            </div>

            <Button isSubmit style="w-full py-3 font-normal md:text-sm">{texts.submitButton}</Button>

          </form>

          <div className="px-2 w-full">
            <div>Login com google</div>
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