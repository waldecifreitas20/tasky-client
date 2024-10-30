import { useState } from "react";
import { AppHeader } from "./components/AppHeader/index.tsx";
import { TopSection } from "./components/TopSection.tsx";
import { MainContent } from "./components/MainContent.tsx";

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