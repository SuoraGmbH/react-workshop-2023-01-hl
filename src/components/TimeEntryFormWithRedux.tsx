import TimeEntryForm from "./TimeEntryForm";
import React from "react";
import { useDispatch } from "react-redux";
import TimeEntry from "../domain/TimeEntry";
import { addTimeEntry } from "../redux/timeEntries/actions";

const TimeEntryFormWithRedux: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const handleNewTimeEntry = (timeEntry: TimeEntry) => {
    dispatch(addTimeEntry(timeEntry));
  };

  return <TimeEntryForm onNewTimeEntry={handleNewTimeEntry} />;
};

export default TimeEntryFormWithRedux;
