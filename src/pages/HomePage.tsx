import { useState } from "react";
import { AppHeader } from "./components/AppHeader";
import { TopSection } from "./components/TopSection.tsx";
import { MainContent } from "./components/MainContent";

export function HomePage() {
  const [username, setUsername] = useState('Carlos');

  return (
    <>
      <AppHeader />
      <TopSection username={username} />
      <MainContent />

    </>
  );
}