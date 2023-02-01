import { createSlice } from "@reduxjs/toolkit";

// Funktioniert garanteirt nicht komplett,
// ist einfach nur als "Beispiel" committed.

export const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [], visibilityFilter: "SHOW_ALL" },
  reducers: {
    addTodo: (state, todo) => {
      // @ts-ignore
      state.todos.push(todo.text);
    },
    toggleTodo: (state, index) => {
      // @ts-ignore
      state.todos[index].completed = !state.todos[index].completed;
    },
    setVisibilityFilter: (state, visibilityFilter) => {
      // @ts-ignore
      state.visibilityFilter = visibilityFilter;
    },
  },
});

// todoSlice.actions.addTodo({ text: "Hallo Welt" });
