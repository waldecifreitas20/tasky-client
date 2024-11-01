import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { Divider } from "./components/Divider";

export function LoginPage() {
  return (
    <>
      <section
        id="login-page"
        className="
          min-h-screen 
          text-center 
          flex flex-col items-center
          py-10 px-6
          text-white
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
        ">
          <legend className="text-2xl">Login</legend>
          <div className="my-10 gap-2 flex flex-col text-white">
            <input className="outline-none rounded-sm bg-accent-transparent light-placeholder py-3 px-2" type="text" placeholder="Nome de Usuário" />
            <input className="outline-none rounded-sm bg-accent-transparent light-placeholder py-3 px-2" type="password" placeholder="Senha" />
          </div>

          <Button isSubmit style="w-full py-3 font-normal">Entrar</Button>

        </form>

        <div className="px-2 w-full">
          <div>Login com google</div>
          <Divider />
          <Button
            style="w-full rounded-full py-3 text-white"
            backgroundColor="bg-white bg-opacity-10 hover:bg-accent-transparent"
            border="border-accent-transparent border"
          >Cadastre-se
          </Button>
        </div>

      </section>
    </>
  );
}