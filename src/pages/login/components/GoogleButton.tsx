import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { AuthServices } from "../../../services/auth";
import { appEnvs } from "../../../services/dotenv";
import { goToPage } from "../../../router";

export function GoogleLoginButton() {

  const clientID = appEnvs.GOOGLE_CLIENT_ID;

  const onSuccess = (response: any) => {
    const googleToken = response.credential;
    AuthServices
      .loginWithGoogle(googleToken)
      .then(() => {
        goToPage("/");
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
      <GoogleOAuthProvider clientId={clientID}>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onError}
        />
      </GoogleOAuthProvider>
    </>
  );
}