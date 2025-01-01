import { Task } from "../../../../interfaces/task.ts";
import { ResponsibleContainer } from "../../components/ResponsibleContainer.tsx";
import { TaskCardView } from "./TaskCardView.tsx";

export function MainContent() {
  const tasks: Array<Task> = [];

  return (
    <>
      <main className="px-4 py-6 md:px-8">
        <ResponsibleContainer style="flex-col">

          <h1 className="mb-6 mt-4 text-3xl text-primary">Suas Tarefas</h1>

          <section className="text-black">
            <p>Total de Tarefas: {tasks.length}</p>

            <div className="mt-2 mb-6">
              <label htmlFor="order-by">Ordenar por: </label>
              <select className="ml-2 py-2 px-2 bg-white outline-none border" id="order-by">
                <option className="font-light" value="recents">Mais Recentes</option>
                <option className="font-light" value="recent">Mais Antigos</option>
              </select>
            </div>

          </section>

          <TaskCardView tasks={tasks} />

        </ResponsibleContainer>
      </main>
    </>
  );
}