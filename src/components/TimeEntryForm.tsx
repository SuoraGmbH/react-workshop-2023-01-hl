import React, { useState } from "react";
import TimeEntry from "../domain/TimeEntry";

interface Props {
  onNewTimeEntry: (timeEntry: TimeEntry) => void;
}

const TimeEntryForm: React.FunctionComponent<Props> = ({ onNewTimeEntry }) => {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    onNewTimeEntry({
      id: new Date().toISOString(),
      end: new Date(),
      start: new Date(),
      comment: inputValue,
    });

    event.preventDefault();
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Kommentar
        <input onChange={handleChange} />
      </label>
      {inputValue}
      <button type="submit">Speichern</button>
    </form>
  );
};

export default TimeEntryForm;
