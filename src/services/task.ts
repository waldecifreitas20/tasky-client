import { Task } from "../interfaces/task";
import { TaskyApi } from "./taskyApi";

async function createTask(task: Task, token: string) {

  const response = await TaskyApi.POST({
    route: "tasks/create",
    authorization: token,
    body: task,
  });

  if (response.status !== 200) {
    throw new Error("Não foi possível criar a tarefa! Revise os campos ou tente mais tarde.");
  }
}

export const TaskServices = {
  createTask,
}