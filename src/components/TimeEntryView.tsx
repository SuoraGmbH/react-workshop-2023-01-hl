interface Props {
  comment: string;
}

function TimeEntryView(props: Props) {
  return <div>{props.comment}</div>;
}

export default TimeEntryView;
