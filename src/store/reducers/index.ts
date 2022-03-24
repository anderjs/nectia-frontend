import { combineReducers } from "@reduxjs/toolkit";

// - Store Reducers
import authentication from "./authentication";
import users from "./users";

/**
 * @description
 * Creating an instance for our root reducer.
 * @see https://redux.js.org/api/combinereducers
 */
export default combineReducers({
  authentication,
  users
});
