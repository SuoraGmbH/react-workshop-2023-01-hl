import React, { ComponentProps, useState } from "react";
import TimeEntryView from "./components/TimeEntryView";
import TimeEntryForm from "./components/TimeEntryForm";
import Counter from "./components/Counter";
import TimeEntryList from "./components/TimeEntryList";
import TimeEntry from "./domain/TimeEntry";
import { configureStore } from "./redux/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

export function App() {
  // ComponentProps<typeof TimeEntryView>["timeEntry"] is the same as TimeEntry
  const timeEntry: ComponentProps<typeof TimeEntryView>["timeEntry"] = {
    id: "oijdsjiodsajdp9i0321",
    comment: "React gelernt",
    start: new Date(),
    end: new Date(),
  };

  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);

  function handleNewTimeEntry(newTimeEntry: TimeEntry) {
    setTimeEntries((prevTimeEntries) => [...prevTimeEntries, newTimeEntry]);
  }

  return (
    <Provider store={store}>
      <Counter />
      <h1>Hallo Hamburg!</h1>
      <h2>Hallo, mein Name ist Sarah!</h2>
      <TimeEntryView timeEntry={timeEntry} />

      <TimeEntryForm onNewTimeEntry={handleNewTimeEntry} />
      <TimeEntryList timeEntries={timeEntries} />
    </Provider>
  );
}
