import { createSlice, Slice } from "@reduxjs/toolkit";

// - Interfaces
import { UsersState } from "src/@types";


const usersSlice: Slice = createSlice({
  name: "users",
  initialState: {
    loading: false
  },
  reducers: {
    setUsers: (state, action) => {},
  }
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;