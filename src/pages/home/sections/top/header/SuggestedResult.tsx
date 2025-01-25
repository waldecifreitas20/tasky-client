import { PropsWithChildren } from "react";

interface SuggestedResultProps extends PropsWithChildren {
  taskName: string,
  date: string,
}

export function SuggestedResult(props: SuggestedResultProps) {
  return (
    <>
      <li
        key={`li-sgs-rslt-${0}`}
        className="
          flex justify-between  
          px-2 py-1
          cursor-pointer
          text-neutral-500 
          hover:text-black
          hover:bg-purple-100 
      ">
        <p className="text-md">{props.taskName}</p>
        <p className="text-sm">{props.date}</p>
      </li>
    </>
  );
}