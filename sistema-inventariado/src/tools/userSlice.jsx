import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {
    // id:"",
    // nombre:"",
    // username:"",
    // password:"",
    // almacen_id:"",
    // isActive:""
  },
};

const userSlice = createSlice({
  name: "usuario",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, title, description } = action.payload;
      const foundTask = state.find((task) => task.id === id);
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
      }
    },
    deleteUser: (state, action) => {
      const foundTask = state.find((task) => task.id === action.payload);
      if (foundTask) {
        state.splice(state.indexOf(foundTask), 1);
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = userSlice.actions;
export default userSlice.reducer;
