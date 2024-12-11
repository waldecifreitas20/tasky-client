import { PropsWithChildren } from "react";

export function ResponsibleContainer(props: PropsWithChildren<{ style?: string }>) {
  return (
    <>
      <div className={`
        flex 
    
        mx-auto
        max-w-lg 
        sm:max-w-2xl
        md:max-w-3xl
        lg:max-w-5xl
        xl:max-w-6xl

        ${props.style ?? ""}
      `}>
        {props.children}
      </div>
    </>
  );
}