
import { Divider } from "../../components/Divider";
import { FormInput } from "../../components/FormInput";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { goToPage } from "../../router";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";


export function SignUpPage() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
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

  const getPasswordError = () => {
    if (errors.password?.type === "required") {
      return "Senha é obrigatoria";
    }
    return "Senha deve conter entre 8 e 16 caracteres";

  }

  const getEmailError = () => {
    if (errors.password?.type === "required") {
      return "Email é obrigatoria";
    }
    return "Digite um email válido";

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
                isValid={!!errors.username}
                errorMsg="Nome é obrigatorio"
              />

              <FormInput
                type="email"
                placeholder="Email"
                register={register("email", {
                  required: true,
                  validate: (email: string) => {
                    return isEmail(email);
                  }
                })}
                isValid={!!errors.email}
                errorMsg={getEmailError()}
              />

              <FormInput
                type="password"
                placeholder="Senha"
                isValid={!!errors.password}
                errorMsg={getPasswordError()}
                register={register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 16
                })}
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