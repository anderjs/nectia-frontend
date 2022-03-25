import { createSelector } from "@reduxjs/toolkit";

import { StoreRootApplication } from "src/@types";

export const productsSelector = createSelector(
  (state: StoreRootApplication) => state.products,
  (products) => products
);
