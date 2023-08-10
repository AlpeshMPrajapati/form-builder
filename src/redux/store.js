import { configureStore } from "@reduxjs/toolkit";
import formSlices from "./slices/formSlices";

export const store = configureStore({
    reducer: {
      forms: formSlices,
    }
  });