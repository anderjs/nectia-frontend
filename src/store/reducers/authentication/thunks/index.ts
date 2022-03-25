import axios from "axios";
import decode from "jwt-decode";
import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";

// - Types
import { User } from "src/@types";

interface UserPayload {
  email: string;
  password: string;
}

export const loginThunk = createAsyncThunk(
  "authentication/login",
  async (args: UserPayload, { rejectWithValue }) => {
    try {
      const request = await axios.post("/authentication/login", args);

      const { token }: { token: string } = request.data?.response;

      localStorage.setItem("token", token);

      return decode(token) as User;
    } catch (err: any) {
      toast(err?.message, { type: "error" });

      return rejectWithValue(err);
    }
  }
);
