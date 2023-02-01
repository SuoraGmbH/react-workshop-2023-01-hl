import React from "react";
import useTimeEntriesFromServer from "../hooks/useTimeEntriesFromServer";
import TimeEntry from "../domain/TimeEntry";
interface Props {
  timeEntries: TimeEntry[];
}
const withTimeEntries = function <T extends Props>(
  Component: React.ComponentType<T>
) {
  const WithTimeEntries: React.FunctionComponent<Omit<T, "timeEntries">> = (
    props
  ) => {
    const timeEntries = useTimeEntriesFromServer();

    if (!timeEntries) {
      return null;
    }

    return <Component {...(props as T)} timeEntries={timeEntries} />;
  };

  return WithTimeEntries;
};

export default withTimeEntries;
