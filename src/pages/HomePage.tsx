import { useState } from "react";
import { AppHeader } from "../components/AppHeader/index.tsx";
import { TopSection } from "../components/TopSection.tsx";

export function HomePage() {
  const [username, setUsername] = useState('Carlos');

  return (
    <>
      <AppHeader />
      <TopSection username={username} />
      <h1 className="text-3xl font-bold underline">Home Page</h1>
    </>
  );
}