import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const mailInitialState = {
  list: [],
  total: 0,
  status: "idle",
  singleMailStatus: "idle",
  singleMail: null,
  error: "",
  bookmarks: [],
  sortBy: "default",
};

const getAllMails = createAsyncThunk("mails/getAllMails", async () => {
  const response = await axios.get("https://flipkart-email-mock.vercel.app/");

  return response.list;
});

const getSingleMailContent = createAsyncThunk(
  "mails/getSingleMailContent",
  async (mailId) => {
    const response = await axios.get(
      `https://flipkart-email-mock.vercel.app/?id=${mailId}`
    );

    return response;
  }
);

const mailsSlice = createSlice({
  name: "mails",
  initialState: mailInitialState,
  reducers: {
    sortData: (state, action) => {
      state.sortBy = action.payload;
    },
  },
  extraReducers: {
    [getAllMails.pending]: (state) => {
      state.status = "loading";
    },

    [getAllMails.fulfilled]: (state, { payload }) => {
      state.list = payload.list;
      state.status = "success";
    },

    [getAllMails.rejected]: (state, { error }) => {
      state.status = "failed";
      state.error = error.message;
    },

    ////////////////////////////////

    [getSingleMailContent.pending]: (state) => {
      state.singleMailStatus = "loading";
    },

    [getSingleMailContent.fulfilled]: (state, { payload }) => {
      state.singleMail = payload.posts;
      state.singleMailStatus = "success";
    },

    [getSingleMailContent.rejected]: (state, { error }) => {
      state.singleMailStatus = "failed";
      state.error = error.message;
    },
  },
});

export const mailsReducer = mailsSlice.reducer;

export const { sortBy } = mailsSlice.actions;

export { getAllMails, getSingleMailContent };
