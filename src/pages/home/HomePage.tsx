import { useEffect, useState } from "react";
import { AppHeader } from "./sections/top/header/index.tsx";
import { Greet } from "./sections/top/Greet.tsx";
import { MainContent } from "./sections/main/index.tsx";
import { Footer } from "./sections/footer/Footer.tsx";
import { AuthServices } from "../../services/auth.ts";
import { Storage } from "../../services/storage.ts";
import { TaskFormProvider } from "../../providers/TaskFormProvider.tsx";
import { TasksDataProvider } from "../../providers/TasksDataProvider.tsx";

export function HomePage() {
  const [username, setUsername] = useState('Carlos');
  const [isUserLoggedIn, setLoginStatus] = useState(false);

  // Check if user is authenticated
  useEffect(() => {
    AuthServices.isLoggedIn().then(isLogged => {
      if (!isLogged) {
        alert("É necessário fazer login para acessar essa página")
        location.pathname = "/login";
      } else {
        setLoginStatus(true);
        const user = Storage.get("username") ?? "Deu Errado";
        setUsername(user);
      }
    });
  }, []);


  if (!isUserLoggedIn) {
    return (<></>);
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col justify-between">
      <TasksDataProvider>
        <TaskFormProvider>
          <AppHeader />
          <Greet username={username} />
          <MainContent />
        </TaskFormProvider>
      </TasksDataProvider>

      <div className="justify-self-end">
        <Footer />
      </div>
    </div>
  );
}