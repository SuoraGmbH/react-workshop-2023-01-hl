import TimeEntry from "../../domain/TimeEntry";

export const addTimeEntry = (timeEntry: TimeEntry) => {
  return {
    type: "TimeEntry/Added",
    timeEntry: timeEntry,
  };
};
