import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer, // add cart slice to the store
  },
});

export default store;
