import React, { ComponentProps, useState } from "react";
import TimeEntryView from "./components/TimeEntryView";
import TimeEntryForm from "./components/TimeEntryForm";
import Counter from "./components/Counter";
import TimeEntryList from "./components/TimeEntryList";
import TimeEntry from "./domain/TimeEntry";

export function App() {
  // ComponentProps<typeof TimeEntryView>["timeEntry"] is the same as TimeEntry
  const timeEntry: ComponentProps<typeof TimeEntryView>["timeEntry"] = {
    id: "oijdsjiodsajdp9i0321",
    comment: "React gelernt",
    start: new Date(),
    end: new Date(),
  };

  const [timeEntries, setTimeEntries] = useState([
    {
      id: "u0e12u90du90adsu90",
      comment: "React Basics lernen",
      start: new Date(),
      end: new Date(),
    },
    {
      id: "jijof9230i9i90di9ads",
      comment: "React testing lernen",
      start: new Date(),
      end: new Date(),
    },
    {
      id: " ijdsa9jjdas",
      comment: "Redux lernen",
      start: new Date(),
      end: new Date(),
    },
  ]);

  function handleNewTimeEntry(newTimeEntry: TimeEntry) {
    setTimeEntries((prevTimeEntries) => [...prevTimeEntries, newTimeEntry]);
  }

  return (
    <>
      <Counter />
      <h1>Hallo Hamburg!</h1>
      <h2>Hallo, mein Name ist Sarah!</h2>
      <TimeEntryView timeEntry={timeEntry} />

      <TimeEntryForm onNewTimeEntry={handleNewTimeEntry} />
      <TimeEntryList timeEntries={timeEntries} />
    </>
  );
}
