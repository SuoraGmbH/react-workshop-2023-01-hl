import React from "react";
import useTimeEntriesFromServer from "../hooks/useTimeEntriesFromServer";
import TimeEntry from "../domain/TimeEntry";
interface Props {
  timeEntries: TimeEntry[];
}
const withTimeEntries = (Component: React.ComponentType<Props>) => {
  const WithTimeEntries: React.FunctionComponent = () => {
    const timeEntries = useTimeEntriesFromServer();

    if (!timeEntries) {
      return null;
    }

    return <Component timeEntries={timeEntries} />;
  };

  return WithTimeEntries;
};

export default withTimeEntries;
