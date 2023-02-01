import { combineReducers } from "redux";
import timeEntriesReducer from "./timeEntries/timeEntriesReducer";

// const initialState = {};
//
// type AppAction = unknown;

export const appReducer = combineReducers({
  timeEntries: timeEntriesReducer,
});
