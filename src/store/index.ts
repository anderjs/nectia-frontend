import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";


/**
 * @description
 * This is the root reducer for the application.
 */
const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});


/**
 * @description
 * Setup the listeners for the store.
 */
setupListeners(store.dispatch);


export default store;