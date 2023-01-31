import React, { useState } from "react";

const TimeEntryForm: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Hallo Welt!");
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
