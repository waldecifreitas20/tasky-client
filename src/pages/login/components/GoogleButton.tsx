import { GoogleLogin } from "@react-oauth/google";
import { AuthServices } from "../../../services/login";

export function GoogleLoginButton() {

  const onSuccess = (response: any) => {
    const googleToken = response.credential;
    AuthServices
      .loginWithGoogle(googleToken)
      .then(() => {
        window.location.pathname = '/';
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  const onError = () => {
    alert("Autenticação falhou. Faça login com email e senha ou cadastre-se")
  }

  return (
    <>
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onError}

      />
    </>
  );
}