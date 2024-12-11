import { Task } from "../../../../interfaces/task";
import { Button } from "../../../../components/Button";

export function TaskCard(props: { task: Task }) {
  const { task } = props;
  return (
    <>
      <article className="
        flex flex-col
        justify-between
        bg-white 
        border 
        shadow-md 
        rounded-md 
        px-4 py-6 
        h-[400px]
        max-w-[380px]  
        md:max-w-[350px]
        lg:max-w-[300px]
      ">
        <div>
          <div className="text-zinc-700 text-sm  flex justify-between">
            <p>{task.date}</p>
            <p>{task.hour ?? "24hrs"}</p>
          </div>
          <p className="text-xl font-medium mt-3 mb-2">{task.name}</p>
          <p className="text-sm text-neutral-500">{task.desc}</p>
        </div>

        <div>
          <Button
            style="py-3 w-full mb-2 md:py-2 lg:text-sm"
          >Editar</Button>
          <Button
            style="py-3 w-full md:py-2 lg:text-sm"
            backgroundColor="bg-white hover:bg-pink-100 "
            border="border border-primary"
          >Deletar Tarefa</Button>
        </div>
      </article>
    </>
  );
}