import { ChangeEvent, MouseEvent, useState } from "react";
import { SuggestedResultsList } from "./SuggestedResultList";

export function SearchBar(props: { width: string }) {
  const [results, setResults] = useState<Array<any>>([]);

  const data = [
    { name: "Task 1 hdhqwoihwq hi qwiheoqwiheopqh woehoq wehiq whiehioqwhoe hio ", date: "10/02/2024" },
    { name: "task 2", date: "10/02/2024" },
    { name: "task 3", date: "10/02/2024" },
    { name: "task 4", date: "10/02/2024" },
    { name: "task 5", date: "10/02/2024" }
  ];

  const onSearch = (evt: MouseEvent) => {
    evt.preventDefault();
  }

  const handleUserTyping = (evt: ChangeEvent<HTMLInputElement>) => {
    const search = evt.target.value;

    if (search === "") {
      return setResults([]);
    }

    const suggestions = getSuggestions(search);
    console.log(suggestions);
    return setResults(suggestions);
  }

  const getSuggestions = (search: string) => {
    return data.filter((task) => {
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