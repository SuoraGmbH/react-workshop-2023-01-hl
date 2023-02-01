import TimeEntry from "../../domain/TimeEntry";

type TimeEntriesState = {
  timeEntries: TimeEntry[];
};

const initialState: TimeEntriesState = {
  timeEntries: [],
};

export const getTimeEntries = (globalState: any): TimeEntry[] =>
  globalState.timeEntries.timeEntries;

const timeEntriesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "TimeEntry/Added":
      return {
        ...state,
        timeEntries: [...state.timeEntries, action.timeEntry],
      };
  }
  return state;
};

export default timeEntriesReducer;
