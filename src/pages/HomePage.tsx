import { useState } from "react";
import { AppHeader } from "./components/AppHeader";
import { TopSection } from "./components/TopSection.tsx";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer.tsx";

export function HomePage() {
  const [username, setUsername] = useState('Carlos');

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