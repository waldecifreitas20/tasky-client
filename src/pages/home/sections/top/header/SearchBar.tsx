import { MouseEvent, useState } from "react";
import { SuggestedResultsList } from "./SuggestedResultList";

export function SearchBar(props: { width: string }) {
  const [searchString, setSearchString] = useState('');
  const results = [
    { name: "Task 1", date: "10/02/2024" },
    { name: "task 2", date: "10/02/2024" },
    { name: "task 3", date: "10/02/2024" },
    { name: "task 4", date: "10/02/2024" },
    { name: "task 5", date: "10/02/2024" }
  ];

  const onSearch = (evt: MouseEvent) => {
    evt.preventDefault();
    alert("Pesquise: " + searchString);
  }
  return (
    <div className={`relative ${props.width}`}>
      <form className="dark-transparent flex justify-between rounded-sm">
        <input
          className="transparent-placeholder pl-3 bg-transparent outline-0 w-full text-white py-3"
          type="search"
          placeholder="Pesquise uma tarefa"
          onChange={evt => setSearchString(evt.currentTarget.value)}
        />
        <button className="opacity-35 w-[20%]  max-w-16 py-3" onClick={onSearch}>
          <i className="fa-solid fa-magnifying-glass fa-xl text-white"></i>
        </button>
      </form>

      <SuggestedResultsList results={results} />
    </div>
  );
}