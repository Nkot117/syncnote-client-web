import { configureStore } from "@reduxjs/toolkit";
import memo from "./modules/memo";

const store = configureStore({
  reducer: { memo },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
