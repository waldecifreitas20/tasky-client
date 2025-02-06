import { Children, PropsWithChildren, useState } from "react";
import { TasksDataContext } from "../contexts/TasksDataContext";
import { TaskServices } from "../services/task";

export function TasksDataProvider(props: PropsWithChildren) {
  const [tasks, setTasks] = useState([]);

  const load = async () => {
    const data = await TaskServices.getAll();
    TaskServices.cacheTasks(data);
    setTasks(data);
  }


  return (
    <>
      <TasksDataContext.Provider value={{
        load,
        tasks,
      }}>
        {Children.map(props.children, (child: any) => {
          return child;
        })}
      </TasksDataContext.Provider>
    </>
  );
}