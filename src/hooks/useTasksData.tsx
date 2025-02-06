import { useContext } from "react";
import { TasksDataContext } from "../contexts/TasksDataContext";

export function useTasksData() {
  const TasksData = useContext(TasksDataContext);

  if (TasksData === undefined) {
    throw new Error("useTasksData must be called only by components wrapped by TasksDataProvider");
  }

  return TasksData;
}