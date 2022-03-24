import { createSlice, Slice } from "@reduxjs/toolkit";

// - Interfaces
import { AuthState } from "src/@types";

const authenticationSlice: Slice<AuthState> = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    authenticate: (state, user) => {},
  },
});

export const { authenticate } = authenticationSlice.actions;

export default authenticationSlice.reducer;
