import { PropsWithChildren } from "react";

interface ButtonProps {
  style?: string,
  border?: string,
  backgroundColor?: string
}

export function Button(props: PropsWithChildren<ButtonProps>) {
  return (
    <>
      <button className={`
        text-primary
        px-5 py-2
        rounded-sm
        hover:bg-dark
        
        ${props.backgroundColor ?? "bg-accent"}
        ${props.border ?? ""}
        ${props.style ?? ""}
      `}>
        {props.children}
      </button>
    </>
  );
}