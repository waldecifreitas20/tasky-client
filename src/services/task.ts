import { Task } from "../interfaces/task";
import { Storage } from "./storage";
import { TaskyApi } from "./taskyApi";

async function create(task: Task) {
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


async function getAll() {
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

async function update(task: Task) {
  const token = Storage.get("access_token") ?? "";

  const response = await TaskyApi.PATCH({
    route: `tasks/update/${task.id}`,
    authorization: token,
    body: task,
  });

  console.log(response);

  if (response.status !== 200) {
    throw new Error("Não foi possível salvar a tarefa! Revise os campos ou tente mais tarde.");
  }
}


async function deleteTask(taskId: number) {
  const token = Storage.get("access_token") ?? "";

  const response = await TaskyApi.DELETE({
    route: `tasks/delete/${taskId}`,
    authorization: token,
  });

  console.log(response);

  if (response.status !== 204) {
    throw new Error("Não foi possível deletar a tarefa! Tente mais tarde.");
  }
}

export const TaskServices = {
  create,
  getAll,
  update,
  deleteTask,
}