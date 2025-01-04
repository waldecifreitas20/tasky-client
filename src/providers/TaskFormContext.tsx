import { Children, createContext, PropsWithChildren, useState } from "react";
import { TaskForm } from "../pages/home/components/TaskForm";
import { TaskServices } from "../services/task";
import { Task } from "../interfaces/task";


export interface TaskFormActions {
  open: CallableFunction
};

const context: TaskFormActions = {
  open: () => { },
};

export const TaskFormContext = createContext(context);

export function TaskFormProvider(props: PropsWithChildren) {
  const [isModalOpen, setModalDisplay] = useState(false);

  const open = () => setModalDisplay(true);
  const close = () => setModalDisplay(false);

  const save = async (task: Task) => {
    try {
      await TaskServices.create(task);
      alert("Tarefa Criada com sucesso!");
      close();
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <TaskFormContext.Provider value={{ open }} >
      {
        isModalOpen ?
          <TaskForm
            onCancel={() => close()}
            onSubmit={save}
          />
          : <></>
      }
      {Children.map(props.children, (child) => child)}
    </TaskFormContext.Provider>
  );
}