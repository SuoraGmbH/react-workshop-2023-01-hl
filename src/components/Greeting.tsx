import React from "react";

interface Props {
  city: string;
}

const Greeting: React.FunctionComponent<Props> = ({ city }) => {
  return <div>Hallo {city}!</div>;
};

export default Greeting;
