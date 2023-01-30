import React, { ComponentProps } from "react";
import TimeEntryView from "./components/TimeEntryView";
import TimeEntryForm from "./components/TimeEntryForm";

export function App() {
  // ComponentProps<typeof TimeEntryView>["timeEntry"] is the same as TimeEntry
  const timeEntry: ComponentProps<typeof TimeEntryView>["timeEntry"] = {
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
      <TimeEntryForm />
    </>
  );
}
