import { AuthPageTemplate } from "../templates/AuthPage";

export function SignUpPage() {
  return (
    <>
      <AuthPageTemplate isLoginMode={false} />
    </>
  );
}