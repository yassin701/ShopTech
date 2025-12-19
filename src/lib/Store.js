import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
import WishListReducer from "./WishList"
export const store = configureStore({
  reducer: {
    cart: cartReducer, // add cart slice to the store
    WishList: WishListReducer,
  },
});

export default store;

// // 👉 save to localStorage on every change
// store.subscribe(() => {
//   const state = store.getState();

//   localStorage.setItem("cart", JSON.stringify(state.cart));
//   localStorage.setItem("wishlist", JSON.stringify(state.WishList));
// });
