interface LogoProps {
  isResponsible?: boolean,
  textSize?: "text-2xl" | "text-4xl",
}

export function Logo(props: LogoProps) {
  return (
    <>
      <div className="flex justify-start items-center">
        <img className={"h-[50px]"} src="/task-icon.svg" alt="task icone" />
        <h1 className={`
          text-accent ml-2
          ${props.textSize ?? "text-2xl"} 
          ${props.isResponsible ? "hidden md:block" : ""}
        `}>Tasky</h1>
      </div>
    </>
  );
}