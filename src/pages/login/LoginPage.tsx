import { AuthServices } from "../../services/auth";
import { AuthPage } from "../templates/AuthPage";
import { goToPage } from "../../router";
import { AuthForm } from "../../components/forms/AuthForm";
import { FormInput } from "../../components/forms/FormInput";
import { GoogleLoginButton } from "./components/GoogleButton";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import { FormPasswordInput } from "../../components/forms/FormPasswordInput";


export function LoginPage() {
  const { handleSubmit, register, formState } = useForm();
  const { errors } = formState;

  const onLogin = async (data: any) => {
    const { email, password } = data;

    try {
      await AuthServices.login({ email, password });
      goToPage("/");
    } catch (error: any) {
      alert(error.message);
    }
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
      <AuthPage>
        <AuthForm
          onSubmit={handleSubmit(onLogin)}
          buttonText="Cadastre-se"
          legend="Faça Seu Cadastro"
        >
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

        <article className="px-2 w-full">
          <GoogleLoginButton />
          <Divider margins="my-8 lg:my-6" />
          <Button
            style="w-full rounded-full py-3 text-white md:text-sm"
            backgroundColor="bg-white bg-opacity-10 hover:bg-accent-transparent"
            border="border-accent-transparent border"
            onClick={() => { goToPage("/sign-up") }}
          >Cadastre-se</Button>
        </article>

      </AuthPage>
    </>
  );
}