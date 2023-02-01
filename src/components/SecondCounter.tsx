import React, { useState } from "react";

const SecondCounter: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const counter1jsx = (
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

  let counter2jsx = null;
  if (count % 2 === 0) {
    counter2jsx = (
      <div>
        <p>Current count: {count2}</p>
        <button
          onClick={() => {
            setCount2(function (prevCount) {
              return prevCount + 1;
            });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
  const counter3jsx = (
    <div>
      <p>Current count: {count3}</p>
      <button
        onClick={() => {
          setCount3(function (prevCount) {
            return prevCount + 1;
          });
        }}
      >
        Increment
      </button>
    </div>
  );

  return (
    <div>
      {counter1jsx}
      {counter2jsx}
      {counter3jsx}
    </div>
  );
};

export default SecondCounter;
