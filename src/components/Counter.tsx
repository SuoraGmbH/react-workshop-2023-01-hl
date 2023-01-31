import React, { useEffect, useState } from "react";

const Counter: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(
    function () {
      document.title = `Aktueller Zähler: ${count}`;
    },
    [count]
  );

  return (
    <div>
      <p>Current count: {count}</p>
      <button
        onClick={() => {
          setCount(function (prevCount) {
            return prevCount + 1;
          });
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
