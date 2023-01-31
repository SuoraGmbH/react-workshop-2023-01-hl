import React from "react";

interface Props {
  city: string;
}

const Greeting: React.FunctionComponent<Props> = ({ city }) => {
  return <div>Hallo {city.toUpperCase()}!</div>;
};

export default Greeting;
