import { combineReducers } from "@reduxjs/toolkit";
import { StoreRootApplication } from "src/@types";

// - Store Reducers
import authentication from "./authentication";

/**
 * @description
 * Creating an instance for our root reducer.
 * @see https://redux.js.org/api/combinereducers
 */
export default combineReducers<StoreRootApplication>({
  authentication
});
