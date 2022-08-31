/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: {
      reducer: (state, action) => {
        state.currentUser = action.payload;
      },
    },
    logOut: {
      reducer: (state) => {
        state.currentUser = {};
      },
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
