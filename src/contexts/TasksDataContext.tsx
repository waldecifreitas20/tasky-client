import { createContext } from "react";
import { Task } from "../interfaces/task";

interface TasksDataContextProps {
  load: CallableFunction
  tasks: Array<Task>;
}

export const TasksDataContext = createContext<TasksDataContextProps | undefined>(undefined);