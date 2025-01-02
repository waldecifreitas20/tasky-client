import { Task } from "../interfaces/task";
import { Storage } from "./storage";
import { TaskyApi } from "./taskyApi";

async function createTask(task: Task) {
  const token = Storage.get("access_token") ?? "";
  const response = await TaskyApi.POST({
    route: "tasks/create",
    authorization: token,
    body: task,
  });

  if (response.status !== 200) {
    throw new Error("Não foi possível criar a tarefa! Revise os campos ou tente mais tarde.");
  }
}


async function getTasks() {
  const token = Storage.get("access_token") ?? "";

  const response = await TaskyApi.GET({
    route: "tasks/all",
    authorization: token,
  });

  try {
    return response.body.tasks;
  } catch (error) {
    return [];
  }

}

export const TaskServices = {
  createTask,
  getTasks
}