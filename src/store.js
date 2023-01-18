import { configureStore } from "@reduxjs/toolkit";
import { mailsReducer } from "./features/mails/mailsSlice";

export const store = configureStore({
  reducer: {
    mails: mailsReducer,
  },
});
