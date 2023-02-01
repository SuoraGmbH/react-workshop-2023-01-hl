import { createStore } from "redux";
import { appReducer } from "./reducer";

export const configureStore = () => {
  return createStore(
    appReducer,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
