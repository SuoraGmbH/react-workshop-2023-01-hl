import React from "react";
import { useSelector } from "react-redux";

const ChristiansDreckigerReduxDebugger: React.FunctionComponent = () => {
  const state = useSelector(function (globalState) {
    return globalState;
  });

  return <pre>{JSON.stringify(state, undefined, 2)}</pre>;
};

export default ChristiansDreckigerReduxDebugger;
