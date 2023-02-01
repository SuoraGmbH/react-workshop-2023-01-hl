import timeEntriesReducer from "./timeEntriesReducer";
import { addTimeEntry } from "./actions";

describe("timeEntriesReducer", () => {
  test("it initializes with useful initialState", () => {
    const state = timeEntriesReducer(undefined, {});

    expect(state.timeEntries).toStrictEqual([]);
  });

  test("it should add new time entries for the TimeEntry/Added action", () => {
    let state = timeEntriesReducer(undefined, {});
    state = timeEntriesReducer(
      state,
      addTimeEntry({
        id: "oijdsjiodsajdp9i0321",
        comment: "React gelernt",
        // Das sollten wir eigentlich *nicht* machen - keine instanzen von "Klassen" in Redux
        start: new Date(),
        end: new Date(),
      })
    );

    expect(state.timeEntries).toHaveLength(1);
    expect(state.timeEntries[0]).toEqual({
      id: "oijdsjiodsajdp9i0321",
      comment: "React gelernt",
      start: new Date(),
      end: new Date(),
    });
  });
});
