import { Button } from "./Button";

interface Task {
  id: number,
  name: string,
  desc: string,
  date: string,
  hour?: string,
  full_day: boolean,
}

export function TaskCard(props: { task: Task }) {
  const { task } = props;
  return (
    <>
      <article className="bg-white border shadow-md rounded-sm">
        <div>
          <p>{task.date}</p>
          <p>{task.hour ?? ""}</p>
        </div>
        <p>{task.name}</p>

        <p>{task.desc}</p>

        <div>
          <Button>Editar</Button>
          <Button backgroundColor="bg-white" border="border border-primary">Deletar Tarefa</Button>
        </div>
      </article>
    </>
  );
}