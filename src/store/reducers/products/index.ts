import { createSlice } from "@reduxjs/toolkit";
import { ProductsState } from "src/@types";
import { fetchProductsThunk } from "./thunks";

const initialState: ProductsState = {
  loading: false,
  data: []
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clear () {}
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsThunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchProductsThunk.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchProductsThunk.rejected, (state) => {
      state.loading = false;
    });
  } 
});

export const { clear } = productsSlice.actions;

export default productsSlice.reducer;
