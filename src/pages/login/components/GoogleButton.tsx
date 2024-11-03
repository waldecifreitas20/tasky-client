import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export function GoogleLoginButton() {

  const onSuccess = (response: any) => {
    console.log("Login Deu certo");
    const profile: any = jwtDecode(response.credential);
    console.log(profile.username, profile.password);
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