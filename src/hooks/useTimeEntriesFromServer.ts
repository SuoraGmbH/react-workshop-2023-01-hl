import { useEffect, useState } from "react";
import TimeEntry from "../domain/TimeEntry";
import { z } from "zod";

const TimeEntryBackendSchema = z.object({
  id: z.string(),
  comment: z.string(),
  start: z.string(),
  end: z.string(),
});

const TimeEntriesBackendResponseSchema = z.array(TimeEntryBackendSchema);

const useTimeEntriesFromServer = () => {
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

  return timeEntries;
};

export default useTimeEntriesFromServer;
