import { createSelector } from "@reduxjs/toolkit";

import { StoreRootApplication } from "src/@types";

/**
 * @description
 * Selector for authentication state.
 */
export const authenticationSelector = createSelector(
  (store: StoreRootApplication) => store.authentication,
  (authentication) => authentication
);
