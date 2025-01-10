import { useEffect, useState } from "react";
import { ResponsibleContainer } from "../../components/ResponsibleContainer.tsx";
import { TaskCardView } from "./TaskCardView.tsx";
import { TaskServices } from "../../../../services/task.ts";

export function MainContent() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRecentsFirst, setIsRecentsFirst] = useState(true);

  const RECENTS_OPTION = "recents";

  useEffect(() => {
    TaskServices.getAll()
      .then((allTasks) => {
        setTasks(allTasks);
      }).finally(() => setIsLoading(false))
  }, []);

  if (isLoading) {
    return <h1> Esta pagina esta carregando</h1>
  }


  const checkTaskListOrder = (value: string) => {
    if (value === RECENTS_OPTION) {
      return setIsRecentsFirst(true);
    }
    return setIsRecentsFirst(false);
  }

  return (
    <>
      <main className="px-4 py-6 md:px-8">
        <ResponsibleContainer style="flex-col">

          <h1 className="mb-6 mt-4 text-3xl text-primary">Suas Tarefas</h1>

          <section className="text-black">
            <p>Total de Tarefas: {tasks.length}</p>

            <div className="mt-2 mb-6">
              <label htmlFor="order-by">Ordenar por: </label>
              <select
                id="order-by"
                className="ml-2 py-2 px-2 bg-white outline-none border"
                onChange={(evt) => { checkTaskListOrder(evt.target.value) }}
              >
                <option className="font-light" value={RECENTS_OPTION}>Mais Recentes</option>
                <option className="font-light" >Mais Antigos</option>
              </select>
            </div>

          </section>

          <TaskCardView tasks={tasks} isReverse={isRecentsFirst} />

        </ResponsibleContainer>
      </main>
    </>
  );
}