import { useContext } from "react";
import { TaskFormContext } from "../contexts/TaskFormContext";

export function useTaskForm() {
  const taskForm = useContext(TaskFormContext);

  if (taskForm === undefined) {
    throw new Error("useTaskform must be called only by components wrapped by TaskFormProvider");
  }

  return taskForm;
}