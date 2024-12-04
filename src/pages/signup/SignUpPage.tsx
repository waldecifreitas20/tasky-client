
import { Divider } from "../../components/Divider";
import { FormInput } from "../../components/FormInput";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { goToPage } from "../../router";
import { useForm } from "react-hook-form";

export function SignUpPage() {
  const { register, handleSubmit, formState } = useForm();

  const formStyle = `
  mt-16 mb-4 
  px-2 py-4 
  w-full 
  bg-primary-transparent 
  text-white
  rounded-md 
  md:mt-8
  `

  const onSignUp = async (data: any) => {
    console.log(data);
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

          <form className={formStyle} onSubmit={handleSubmit(onSignUp)}>
            <legend className="text-2xl">Faça seu cadastro</legend>
            <div className="my-10 gap-2 flex flex-col text-white">

              <FormInput
                placeholder="Nome"
                type="text"
                register={register("username", { required: true })}
                isValid={!!formState.errors.username}
                errorMsg="Nome é obrigatorio"
              />

              <FormInput
                type="email"
                placeholder="Email"
                register={register("email", { required: true })}
                isValid={!!formState.errors.email}
                errorMsg="Email é obrigatorio"
              />

              <FormInput
                type="password"
                placeholder="Senha"
                register={register("password", { required: true })}
                isValid={!!formState.errors.password}
                errorMsg="Senha é obrigatoria"
              />

            </div>
            <Button
              style="w-full py-3 font-normal md:text-sm"
              onClick={handleSubmit(onSignUp)}
            >Cadastre-se</Button>
          </form>

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