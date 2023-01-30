import React from "react";

const TimeEntryForm: React.FunctionComponent = () => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Hallo Welt!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Speichern</button>
    </form>
  );
};

export default TimeEntryForm;
