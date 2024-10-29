import { SearchBar } from "./SearchBar"

export function AppHeader() {

  return (
    <>
      <header className="bg-primary px-5 py-3 border-b border-white">
        <div className="flex justify-between items-center max-w-xl mx-auto">
          
          <a href="/" className="w-[50px]  flex justify-start">
            <img className="h-[50px]" src="/task-icon.svg" alt="task icone" />
          </a>

          <SearchBar classes="w-[65%]" />

          <a href="" className="w-[50px] flex justify-end">
            <i className="fa-regular fa-user fa-2xl text-white"></i>
          </a>
        
        </div>
      </header>
    </>
  );
}