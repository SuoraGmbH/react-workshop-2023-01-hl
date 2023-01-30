import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root")!);

function App() {
  return (
    <>
      <h1>Hallo Hamburg!</h1>
      <h2>Hallo, mein Name ist Sarah!</h2>
    </>
  );
}

root.render(<App />);
