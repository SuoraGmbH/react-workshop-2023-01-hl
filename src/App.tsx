import React from "react";
import TimeEntryView from "./components/TimeEntryView";

export function App() {
  return (
    <>
      <h1>Hallo Hamburg!</h1>
      <h2>Hallo, mein Name ist Sarah!</h2>
      <TimeEntryView comment="ich habe es geschafft einen text als property zu übergeben" />
    </>
  );
}
