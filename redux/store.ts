import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";

export const store = () => {
  return configureStore({
    reducer: {
      menu: menuReducer,
      // add reducers here
    },
  });
};

export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
