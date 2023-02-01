import React from "react";
import { useSelector } from "react-redux";
import { getTimeEntries } from "../redux/timeEntries/timeEntriesReducer";

const NavBar: React.FunctionComponent = () => {
  const timeEntries = useSelector(getTimeEntries);

  return (
    <div
      style={{
        background: "black",
        color: "white",
        textAlign: "right",
      }}
    >
      {timeEntries.length} Time Entries
    </div>
  );
};

export default NavBar;
