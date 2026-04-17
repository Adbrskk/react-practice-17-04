import { configureStore } from "@reduxjs/toolkit";
import gradesReducer from "../features/grades/gradesSlice";

export const store = configureStore({
  reducer: {
    grades: gradesReducer,
  },
});