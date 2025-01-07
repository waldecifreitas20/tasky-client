import { Children, createContext, PropsWithChildren, useState } from "react";
import { TaskForm } from "../pages/home/components/TaskForm";
import { TaskServices } from "../services/task";
import { Task } from "../interfaces/task";


export interface TaskFormActions {
  open: CallableFunction
  openEditable: CallableFunction
};

export const TaskFormContext = createContext({
  open: () => { },
  openEditable: (data: Task) => { }
});

export function TaskFormProvider(props: PropsWithChildren) {
  const [isModalOpen, setModalDisplay] = useState(false);
  const [task, setTask] = useState<null | Task>(null);


  const open = () => setModalDisplay(true);
  const close = () => setModalDisplay(false);

  const openEditable = (data: Task) => {
    setTask(data)
    open();
  }

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
    <TaskFormContext.Provider value={{ open, openEditable }} >
      {
        isModalOpen ?
          <TaskForm
            onCancel={() => close()}
            onSubmit={save}
            data={task}
          />
          : <></>
      }
      {Children.map(props.children, (child) => child)}
    </TaskFormContext.Provider>
  );
}