import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },

    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          item.done ? (item.done = false) : (item.done = true);
        }
      });
    },

    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => action.payload.id !== item.id
      );
    },

    filterDone: (state, action) => {
      state.todoList = state.todoList.filter((item) => !item.done);
    },
  },
});

export const { saveTodo, setCheck, deleteTodo, filterDone } = TodoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default TodoSlice.reducer;
