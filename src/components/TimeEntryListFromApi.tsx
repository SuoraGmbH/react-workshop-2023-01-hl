import TimeEntryList from "./TimeEntryList";
import React, { useEffect, useState } from "react";
import TimeEntry from "../domain/TimeEntry";
import { z } from "zod";

// type TimeEntriesResponse = {
//   id: string;
//   comment: string;
//   start: string;
//   end: string;
// }[];

const TimeEntryBackendSchema = z.object({
  id: z.string(),
  comment: z.string(),
  start: z.string(),
  end: z.string(),
});

const TimeEntriesBackendResponseSchema = z.array(TimeEntryBackendSchema);

const TimeEntryListFromApi: React.FunctionComponent = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>();

  useEffect(() => {
    fetch("http://localhost:3001/timeEntries")
      .then((response) => response.json())
      .then((responseData: unknown) => {
        const backendTimeEntries =
          TimeEntriesBackendResponseSchema.parse(responseData);

        const convertedTimeEntries = backendTimeEntries.map((timeEntry) => {
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
