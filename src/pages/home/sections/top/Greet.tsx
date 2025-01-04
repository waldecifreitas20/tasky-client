import { useContext } from "react";
import { Button } from "../../../../components/Button";
import { ResponsibleContainer } from "../../components/ResponsibleContainer";
import { TaskFormContext } from "../../../../providers/TaskFormContext";

export function Greet(props: { username: string }) {

  const taskForm = useContext(TaskFormContext);

  return (
    <>
      <section className="bg-primary md:px-8">
        <ResponsibleContainer
          style="
          justify-between items-center 
          text-white py-6 flex-col text-center
          md:flex-row md:text-left md:items-start md:py-10
        "
        >
          <article className="">
            <p className="text-3xl md:text-4xl ">Olá {props.username}!</p>
            <p className="opacity-75 mt-2 mb-7 lg:mb-0">
              Visualize e gerencie suas tarefas por aqui
            </p>
          </article>

          <Button
            style="flex justify-between items-center md:mb-0"
            onClick={() => taskForm.open()}
          >
            Nova Tarefa
            <i className="fa-solid fa-plus border-2 border-primary rounded-full p-1 ml-4"></i>
          </Button>
        </ResponsibleContainer>

      </section>
    </>
  );
}