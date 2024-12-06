import { Children, PropsWithChildren } from "react";
import { Logo } from "../../components/Logo";

interface AuthPageProps extends PropsWithChildren { }

export function AuthPage(props: AuthPageProps) {
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

          {Children.map(props.children, (child) => {
            return child;
          })}

        </div>
      </section>
    </>
  );
}