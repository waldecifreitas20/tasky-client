import { useState } from "react";
import { AppHeader } from "./components/AppHeader";
import { TopSection } from "./components/TopSection.tsx";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer.tsx";

export function HomePage() {
  const [username, setUsername] = useState('Carlos');

  return (
    <>
      <AppHeader />
      <TopSection username={username} />
      <MainContent />
      <Footer />
    </>
  );
}