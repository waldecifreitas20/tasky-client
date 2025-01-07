import { Children, createContext, PropsWithChildren, useRef, useState } from "react";
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
    setTask(data);
    open();
  }


  const createTask = async (task: Task) => {
    try {
      await TaskServices.create(task);
      alert("Tarefa Criada com sucesso!");
      close();
    } catch (error: any) {
      alert(error.message);
    }
  }

  const updateTask = async (data: Task) => {
    try {
      await TaskServices.update({ ...data, id: task?.id ?? 0 });
      alert("Tarefa salva com sucesso!");
      close();
    } catch (error: any) {
      alert(error.message);
    }
  }

  const isEditMode = () => !!task;


  return (
    <TaskFormContext.Provider value={{ open, openEditable }} >
      {
        isModalOpen ?
          <TaskForm
            onCancel={() => close()}
            onSubmit={isEditMode() ? updateTask : createTask}
            data={task}
            isEditMode={isEditMode()}
          />
          : <></>
      }
      {Children.map(props.children, (child) => child)}
    </TaskFormContext.Provider>
  );
}