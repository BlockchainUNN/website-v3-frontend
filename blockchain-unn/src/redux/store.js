import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../redux/slice";

export const store = configureStore({
  reducer: { app: appReducer },
});
