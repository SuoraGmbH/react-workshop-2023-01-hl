import TimeEntry from "../domain/TimeEntry";

interface Props {
  timeEntry: TimeEntry;
}

function TimeEntryView(props: Props) {
  return (
    <div>
      <h3>{props.timeEntry.comment}</h3>
      <pre>{props.timeEntry.start.toLocaleString()}</pre>
    </div>
  );
}

export default TimeEntryView;
