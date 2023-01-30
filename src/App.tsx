import React from "react";
import TimeEntryView from "./components/TimeEntryView";
import TimeEntry from "./domain/TimeEntry";

export function App() {
  const timeEntry: TimeEntry = {
    id: "oijdsjiodsajdp9i0321",
    comment: "React gelernt",
    start: new Date(),
    end: new Date(),
  };

  return (
    <>
      <h1>Hallo Hamburg!</h1>
      <h2>Hallo, mein Name ist Sarah!</h2>
      <TimeEntryView timeEntry={timeEntry} />
    </>
  );
}
