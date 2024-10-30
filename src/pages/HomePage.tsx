import { useState } from "react";
import { AppHeader } from "../components/AppHeader/index.tsx";

export function HomePage() {
  const [username, setUsername] = useState('Carlos');

  return (
    <>
      <AppHeader />
      <section className="
          py-6
          bg-primary
          text-center
          text-white
      ">
        <p className="text-2xl">Olá {username}!</p>
        <p className="opacity-75 mt-2 mb-7">Visualize e gerencie suas tarefas por aqui</p>

        <button className="
          text-primary
          mt-4
          bg-accent
          px-5 py-2
          rounded-sm
          w-[200px]
          hover:bg-dark
          flex justify-between items-center
          mx-auto
        ">
          Nova Tarefa
          <i className="fa-solid fa-plus border-2 border-primary rounded-full p-1 ml-4"></i>
        </button>
      </section>
      <h1 className="text-3xl font-bold underline">Home Page</h1>
    </>
  );
}