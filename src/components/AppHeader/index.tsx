import { useState, MouseEvent } from "react";
import { SearchBar } from "./SearchBar"

export function AppHeader() {
  const [dropdownVisibility, setVisibility] = useState(true);

  const toggleDropdown = (evt: MouseEvent) => {
    evt.preventDefault();
    setVisibility(!dropdownVisibility);
  }

  return (
    <>
      <header className="bg-primary px-5 py-3 border-b border-white">
        <div className="flex justify-between items-center max-w-xl mx-auto">

          <a href="/" className="w-[50px]  flex justify-start">
            <img className="h-[50px]" src="/task-icon.svg" alt="task icone" />
          </a>

          <SearchBar classes="w-[65%]" />

          <div className="relative">

            <a href=""
              className="w-[50px] flex justify-center"
              onClick={toggleDropdown}
            >
              <i className="fa-regular fa-user fa-2xl text-white"></i>
            </a>

            <div className={`
              absolute
              -bottom-16
              right-0
              bg-white
              
              rounded-sm
              shadow-md
              
              ${dropdownVisibility ? 'hidden' : 'block'}
              `}
            >
              <a href="" className="block px-7 py-2 hover:bg-gray-100">Sair</a>
            </div>
          </div>

        </div>
      </header >
    </>
  );
}