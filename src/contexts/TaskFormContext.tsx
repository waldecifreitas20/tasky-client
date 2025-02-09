import { createContext } from "react";
import { Task } from "../interfaces/task";

export interface TaskFormActions {
  open: CallableFunction
  openEditable: (data: Task) => void; 
};

export const TaskFormContext = createContext<TaskFormActions | undefined>(undefined);

