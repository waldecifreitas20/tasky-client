export function AppHeader() {
  return (
    <>
      <header className="bg-primary flex justify-between items-center px-8">
        <a href="/">
          <img src="/task-icon.svg" alt="task icone" />
        </a>

        <div>
          <input type="search" placeholder="Pesquise uma tarefa" />
          <a href="">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>

        <div>

          <a href="">
            <i className="fa-regular fa-user"></i>
          </a>
        </div>
      </header>
    </>
  );
}