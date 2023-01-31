import React from "react";
import TimeEntry from "../domain/TimeEntry";
import TimeEntryView from "./TimeEntryView";

const TimeEntryList: React.FunctionComponent = () => {
  const timeEntries: TimeEntry[] = [
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
  ];

  const listItems = timeEntries.map(function (timeEntry) {
    return <TimeEntryView key={timeEntry.id} timeEntry={timeEntry} />;
  });

  return <div>{listItems}</div>;
};

export default TimeEntryList;
