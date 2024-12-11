import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { isEmail } from "validator";

import { PasswordInput } from "../../components/forms/PasswordInput";
import { getEmailError, getPasswordError } from "../../utils/formErrorMsg";
import { FormInput } from "../../components/forms/Input";
import { Form } from "../../components/forms/Form";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";

import { AuthServices } from "../../services/auth";

export function SignUpPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSignUp = async (data: any) => {
    const { username, password, email } = data;

    try {
      await AuthServices.signUp({
        username, email, password
      });
      navigate("/");
    } catch (error: any) {
      console.log(error);

      alert(error.message);
    }
  }

  return (
    <>
      <section id="auth-page">
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

          <Form
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
              errorMsg={getEmailError(errors.email?.type)}
            />

            <PasswordInput
              placeholder="Senha"
              isValid={!!errors.password}
              errorMsg={getPasswordError(errors.password?.type)}
              register={register("password", {
                required: true,
                minLength: 8,
                maxLength: 16
              })}
            />
          </Form>

          <div className="px-2 w-full">
            <Divider margins="my-0 lg:my-4" />
            <Button
              style="w-full rounded-full py-3 text-white md:text-sm"
              backgroundColor="bg-white bg-opacity-10 hover:bg-accent-transparent"
              border="border-accent-transparent border"
              onClick={() => { navigate("/login") }}
            >Faça Login</Button>
          </div>

        </div>
      </section>
    </>
  );
}