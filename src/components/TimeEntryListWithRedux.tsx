import React from "react";
import TimeEntryList from "./TimeEntryList";
import { useSelector } from "react-redux";
import { getTimeEntries } from "../redux/timeEntries/timeEntriesReducer";

const TimeEntryListWithRedux: React.FunctionComponent = () => {
  const timeEntries = useSelector(getTimeEntries);

  return <TimeEntryList timeEntries={timeEntries} />;
};

export default TimeEntryListWithRedux;
