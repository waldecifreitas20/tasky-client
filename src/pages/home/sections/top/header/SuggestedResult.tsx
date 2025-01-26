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
          flex justify-between  items-center
          px-2 py-1 gap-2
          cursor-pointer
          max-w-full
          text-neutral-500 
          hover:text-black
          hover:bg-purple-100 
      ">
        <p className="
          text-md
          overflow-ellipsis
          overflow-hidden
          grow-0 
          h-[22px] 
          whitespace-nowrap
        ">{props.taskName}</p>
        <p className="text-sm">{props.date}</p>
      </li>
    </>
  );
}