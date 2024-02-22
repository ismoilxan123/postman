import { configureStore } from "@reduxjs/toolkit";
import postmanSlice from "./postmanSlice";

export const store = configureStore({
  reducer: postmanSlice,
});
