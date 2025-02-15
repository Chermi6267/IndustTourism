import { configureStore } from "@reduxjs/toolkit";
import authReduser from "./authSlice";
import hexMapReduser from "./hexMapSlice";
import userSlice from "./userSlice";
import adminSlice from "./adminSlice";
import filtersSlice from "./filtersSlice";

export const store = configureStore({
  reducer: {
    auth: authReduser,
    hexMap: hexMapReduser,
    user: userSlice,
    adminCenter: adminSlice,
    filters: filtersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
