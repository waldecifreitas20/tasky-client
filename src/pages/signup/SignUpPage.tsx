
import { Divider } from "../../components/Divider";
import { FormInput } from "../../components/forms/FormInput";
import { FormPasswordInput } from "../../components/forms/FormPasswordInput";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { goToPage } from "../../router";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import { AuthForm } from "../../components/forms/AuthForm";


export function SignUpPage() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

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
      return "Email é obrigatorio";
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

          <AuthForm
            onSubmit={handleSubmit(onSignUp)}
            buttonText="Cadastre-se"
            legend="Faça Seu Cadastro"
          >
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

            <FormPasswordInput
              placeholder="Senha"
              isValid={!!errors.password}
              errorMsg={getPasswordError()}
              register={register("password", {
                required: true,
                minLength: 8,
                maxLength: 16
              })}
            />
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