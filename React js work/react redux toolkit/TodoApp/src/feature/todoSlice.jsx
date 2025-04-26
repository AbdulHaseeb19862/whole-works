import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, name: "First Task" }],
};

// const initialState = {
//   todos: [{ id: 1, name: "First Task" }],
// };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const task = { name: action.payload, id: nanoid() };
      state.todos.push(task);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    upDateTodo: (state, action) => {
      const { id, newName } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);

      if (todo) {
        todo.name = newName;
      }
    },
  },
});

export const { addTodo, removeTodo, upDateTodo } = todoSlice.actions;
export default todoSlice.reducer;
