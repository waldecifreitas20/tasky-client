import { PropsWithChildren } from "react";
import { TaskCard } from "./TaskCard";
import { Task } from "../../../../interfaces/task";

interface TaskCardViewProps extends PropsWithChildren {
  tasks: Array<Task>,
  isReverse?: boolean,
}

export function TaskCardView(props: TaskCardViewProps) {
  const tasks = props.tasks.map((task) => task);

  if (props.isReverse) {
    tasks.reverse();
  }

  const renderCards = () => {
    return tasks.map((task, key) => {
      return (
        <TaskCard key={key} task={task} />
      );
    });
  }

  return (
    <>
      <section className="flex flex-col gap-2 mt-6 items-center md:flex-row flex-wrap">
        {props.tasks.length === 0 ?
          <>
            <p
              className="text-2xl text-center text-neutral-400"
            >Você ainda não cadastrou nenhuma tarefa</p>
          </> : renderCards()}
      </section>
    </>
  );
}