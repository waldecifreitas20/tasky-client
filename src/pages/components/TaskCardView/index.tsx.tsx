import { PropsWithChildren } from "react";
import { TaskCard } from "./TaskCard";
import { Task } from "../../../interfaces/task";

export function TaskCardView(props: PropsWithChildren<{ tasks: Array<Task> }>) {
  return (
    <>
      <section className="flex flex-col gap-5 mt-6 items-center md:flex-row flex-wrap">
        {props.tasks.map((task, key) => {
          return (
            <TaskCard key={key} task={task} />
          );
        })}
      </section>
    </>
  );
}