import TimeEntryList from "./TimeEntryList";
import withTimeEntries from "../hoc/withTimeEntries";

const TimeEntryListWithHOC = withTimeEntries(TimeEntryList);

export default TimeEntryListWithHOC;
