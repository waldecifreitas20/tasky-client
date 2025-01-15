import { createContext } from "react";

export interface TaskFormActions {
  open: CallableFunction
  openEditable: CallableFunction
};

export const TaskFormContext = createContext<TaskFormActions | undefined>(undefined);

