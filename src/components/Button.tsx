import { MouseEventHandler, PropsWithChildren } from "react";

interface ButtonProps {
  style?: string,
  border?: string,
  backgroundColor?: string,
  onClick?: MouseEventHandler,
  isSubmit?: boolean,
}

export function Button(props: PropsWithChildren<ButtonProps>) {
  return (
    <>
      <button className={`
        px-5 py-2
        rounded-sm
        hover:bg-dark
        
        ${props.backgroundColor ?? "bg-accent text-primary"}
        ${props.border ?? ""}
        ${props.style ?? ""}
      `}
        type={`${props.isSubmit ? "submit" : "button"}`}
        onClick={props.onClick}
      >
      {props.children}
    </button >
    </>
  );
}