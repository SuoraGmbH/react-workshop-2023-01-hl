import React from "react";
import { useSelector } from "react-redux";
import { getTimeEntries } from "../redux/timeEntries/timeEntriesReducer";
import styled from "styled-components";

const NavBarDiv = styled.div<{ primary: boolean }>`
  background: black;
  color: ${(props) => {
    if (props.primary) {
      return "pink";
    }
    return "white";
  }};
  text-align: right;
`;

const NavBar: React.FunctionComponent = () => {
  const timeEntries = useSelector(getTimeEntries);

  return (
    <NavBarDiv primary={false}>{timeEntries.length} Time Entries</NavBarDiv>
  );
};

export default NavBar;
