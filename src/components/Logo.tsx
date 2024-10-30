export function Logo(props: { isResponsible?: boolean }) {
  return (
    <>
      <div className="flex justify-start items-center">
        <img className="h-[50px]" src="/task-icon.svg" alt="task icone" />
        <h1 className={`
          text-accent 
          text-2xl 
          ml-2 
          ${props.isResponsible ? "hidden md:block" : ""}
        `}>Tasky</h1>
      </div>
    </>
  );
}