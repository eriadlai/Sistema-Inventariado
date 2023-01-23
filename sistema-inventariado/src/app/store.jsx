import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../tools/userSlice";

export const store = configureStore({
  reducer: { usuario: userReducer },
});
