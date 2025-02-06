import { ChangeEvent, MouseEvent, useState } from "react";
import { SuggestedResultsList } from "./SuggestedResultList";
import { Task } from "../../../../../interfaces/task";
import { TaskServices } from "../../../../../services/task";
import { useTasksData } from "../../../../../hooks/useTasksData";

export function SearchBar(props: { width: string }) {
  const taskData = useTasksData();
  const [results, setResults] = useState<Array<Task>>([]);

  const onSearch = (evt: MouseEvent) => {
    evt.preventDefault();
  }

  const handleUserTyping = (evt: ChangeEvent<HTMLInputElement>) => {
    const search = evt.target.value;

    if (search === "") {
      return setResults([]);
    }

    return setResults(getSuggestions(search));
  }

  const getSuggestions = (search: string) => {
    return taskData.tasks.filter((task: any) => {
      const taskName = task.name.toLowerCase().trim();
      const match = search.toLowerCase().trim();

      return taskName.indexOf(match) !== -1;
    }) as Array<any>;
  }


  return (
    <div className={`relative ${props.width}`}>
      <form className="dark-transparent flex justify-between rounded-sm">
        <input
          className="
          transparent-placeholder 
          bg-transparent 
          outline-none 
          w-full 
          text-white py-3
          pl-3 
          "
          type="search"
          placeholder="Pesquise uma tarefa"
          onChange={handleUserTyping}
        />
        <button className="opacity-35 w-[20%]  max-w-16 py-3" onClick={onSearch}>
          <i className="fa-solid fa-magnifying-glass fa-xl text-white"></i>
        </button>
      </form>

      <SuggestedResultsList results={results} />

    </div>
  );
}