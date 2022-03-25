import { createSlice } from "@reduxjs/toolkit";

// - Interfaces
import { AuthState } from "src/@types";
import { loginThunk } from "./thunks";

const initialState: AuthState = {
  user: null,
  loading: false
}

const authenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, user) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });

    builder.addCase(loginThunk.rejected, (state, action) => {
      state.loading = false;
    });
  }
});

export const { authenticate } = authenticationSlice.actions;

export default authenticationSlice.reducer;
