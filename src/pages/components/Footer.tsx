export function Footer() {
  return (
    <>
      <footer className="bg-primary text-center py-6">
        
        <img className="h-[30px] block mx-auto mb-6" src="/task-icon-footer.svg" alt="task icone" />
        
        <div className="text-zinc-500 text-sm">
          <p className="my-1">
            Desenvolvido por <a className="text-accent" target="_blank"
              href="https://waldecifreitas.vercel.app/"
            >Waldeci Freitas
            </a>
          </p>
          <p>Todos os Direitos Reservados &copy;</p>
        </div>

      </footer>
    </>
  );
}