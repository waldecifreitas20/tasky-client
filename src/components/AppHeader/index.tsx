import { useState, MouseEvent } from "react";
import { SearchBar } from "./SearchBar"

export function AppHeader() {
  const [dropdownVisibility, setVisibility] = useState(true);

  const toggleDropdown = (evt: MouseEvent) => {
    evt.preventDefault();
    setVisibility(!dropdownVisibility);
  }

  const logoutUser = (evt: MouseEvent) => {
    evt.preventDefault();
    alert("Usuario deslogado")
  }

  return (
    <>
      <header className="bg-primary px-5 py-3 border-b border-white">
        <div className="
          flex 
          justify-between items-center 
          max-w-xl 
          mx-auto
          sm:max-w-2xl
          md:max-w-4xl
          xl:max-w-6xl
        ">

          <a href="/" className="flex justify-start items-center">
            <img className="h-[50px]" src="/task-icon.svg" alt="task icone" />
            <h1 className="text-accent text-2xl ml-2 hidden md:block">Tasky</h1>
          </a>

          <SearchBar classes="w-[65%]" />

          <div className="justify-center items-center text-accent hidden md:flex">
            <a href="" className=" mr-2 text-accent" onClick={logoutUser}>Sair</a>
            <i className="fa-regular fa-user fa-xl"></i>
          </div>

          <div className="relative md:hidden">
            <button className="w-[50px]  flex justify-center" onClick={toggleDropdown}>
              <i className="fa-regular fa-user fa-xl text-white"></i>
            </button>

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
              <a href="" className="md:hidden block px-7 py-2 hover:bg-gray-100">Sair</a>
            </div>
          </div>

        </div>
      </header >
    </>
  );
}