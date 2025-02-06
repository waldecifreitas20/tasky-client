import { PropsWithChildren } from "react";
import { useTaskForm } from "../../../../../hooks/useTaskForm";
import { Task } from "../../../../../interfaces/task";

interface SuggestedResultProps extends PropsWithChildren {
  task: Task;
}

export function SuggestedResult(props: SuggestedResultProps) {
  const taskForm = useTaskForm();

  return (
    <>
      <li
        onClick={() => taskForm.openEditable(props.task)}
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
        ">{props.task.name}</p>
        <p className="text-sm">{props.task.date}</p>
      </li>
    </>
  );
}