import { PropsWithChildren } from "react";

export function Button(props: PropsWithChildren<{ border?: string, backgroundColor?: string }>) {
  return (
    <>
      <button className={`
        text-primary
        px-5 py-2
        rounded-sm
        w-[200px]
        hover:bg-dark
        flex justify-between items-center
        mx-auto
        md:m-0
        
        ${props.backgroundColor ?? "bg-accent"}
        ${props.border ?? ""}
      `}>
        {props.children}
      </button>
    </>
  );
}