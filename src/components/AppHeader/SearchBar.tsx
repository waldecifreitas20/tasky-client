import { MouseEvent, useState } from "react";

export function SearchBar(props: { classes: string }) {
  const [searchString, setSearchString] = useState('');

  const onSearch = (evt: MouseEvent) => {
    evt.preventDefault();
    alert("Pesquise: " + searchString);
  }
  return (
    <>
      <form className={`dark-transparent flex justify-between rounded-sm ${props.classes ?? ""}`}>
        <input
          className="transparent-placeholder pl-3 bg-transparent outline-0 w-[80%] text-white py-3"
          type="search"
          placeholder="Pesquise uma tarefa"
          onChange={evt => setSearchString(evt.currentTarget.value)}
        />
        <button className="opacity-35 w-[20%] max-w-16 py-3" onClick={onSearch}>
          <i className="fa-solid fa-magnifying-glass fa-xl text-white"></i>
        </button>
      </form>
    </>
  );
}