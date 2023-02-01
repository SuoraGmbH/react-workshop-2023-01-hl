import TimeEntryList from "./TimeEntryList";
import React, { useEffect, useState } from "react";
import TimeEntry from "../domain/TimeEntry";

const TimeEntryListFromApi: React.FunctionComponent = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>();

  useEffect(() => {
    fetch("http://localhost:3001/timeEntries")
      .then((response) => response.json())
      .then((responseData) => {
        const convertedTimeEntries = responseData.map((timeEntry: any) => {
          return {
            ...timeEntry,
            start: new Date(timeEntry.start),
            end: new Date(timeEntry.end),
          };
        });

        setTimeEntries(convertedTimeEntries);
      });
  }, []);

  if (!timeEntries) {
    return <div />;
  }

  return <TimeEntryList timeEntries={timeEntries} />;
};

export default TimeEntryListFromApi;
