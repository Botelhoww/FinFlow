import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./slices/transactionsSlice";
// import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    // user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;