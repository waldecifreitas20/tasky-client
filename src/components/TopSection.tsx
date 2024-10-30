import { ResponsibleContainer } from "./ResponsibleContainer";

export function TopSection(props: { username: string }) {
  return (
    <div className="bg-primary">
      <ResponsibleContainer
        style="
          text-white py-6 flex-col text-center
          md:flex-row md:text-left md:items-start md:py-10
        "
      >
        <article className="">
          <p className="text-2xl md:text-3xl lg:text-4xl">Olá {props.username}!</p>
          <p className="opacity-75 mt-2 mb-7 lg:mb-0">Visualize e gerencie suas tarefas por aqui</p>
        </article>

        <button className="
          text-primary
          bg-accent
          px-5 py-2
          rounded-sm
          w-[200px]
          hover:bg-dark
          flex justify-between items-center
          mx-auto
          md:m-0
        ">
          Nova Tarefa
          <i className="fa-solid fa-plus border-2 border-primary rounded-full p-1 ml-4"></i>
        </button>
      </ResponsibleContainer>
    </div>
  );
}