import TimeEntryList from "./TimeEntryList";
import React from "react";
import useTimeEntriesFromServer from "../hooks/useTimeEntriesFromServer";

const TimeEntryListFromApi: React.FunctionComponent = () => {
  const timeEntries = useTimeEntriesFromServer();

  if (!timeEntries) {
    return <div />;
  }

  return <TimeEntryList timeEntries={timeEntries} />;
};

export default TimeEntryListFromApi;
