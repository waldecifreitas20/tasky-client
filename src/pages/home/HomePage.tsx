import { useEffect, useState } from "react";
import { AppHeader } from "./components/AppHeader/index.tsx";
import { TopSection } from "./components/TopSection.tsx";
import { MainContent } from "./components/MainContent/index.tsx";
import { Footer } from "./components/Footer.tsx";
import { AuthServices } from "../../services/login.ts";

export function HomePage() {
  const [username, setUsername] = useState('Carlos');
  const [isUserLoggedIn, setLoginStatus] = useState(false);
  
  useEffect(() => {
    AuthServices.isLoggedIn().then(isLogged => {
      if (!isLogged) {
        alert("É necessário fazer login para acessar essa página")
        location.pathname = "/login";
      } else {
        setLoginStatus(true);
      }
    });
  });

  if (!isUserLoggedIn) {
    return (<></>);  
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col justify-between">
      <div>
        <AppHeader />
        <TopSection username={username} />
        <MainContent />
      </div>

      <div className="justify-self-end">
        <Footer />
      </div>
    </div>
  );
}