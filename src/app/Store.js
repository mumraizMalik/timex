import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/BackgroundColor";
export const store = configureStore({
  reducer: counterSlice,
});
