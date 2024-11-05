import { configureStore } from "@reduxjs/toolkit";
import metaSlice from "slices/meta";
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    meta: metaSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatcher = typeof store.dispatch;
