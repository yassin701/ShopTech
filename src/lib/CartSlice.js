import { createSlice } from "@reduxjs/toolkit";

const storageCart = () => {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : {
          cartItems: [], 
  totalQuantity: 0,
  totalPrice: 0,
    }
}



const initialState = storageCart();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exist = state.cartItems.find((i) => i.id === item.id);

      if (exist) {
         exist.quantity += 1;
      }else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const exist = state.cartItems.find((i) => i.id === id);

      if (exist) {
        state.totalQuantity -= exist.quantity;
        state.totalPrice -= exist.price * exist.quantity;
        state.cartItems = state.cartItems.filter((i) => i.id !== id);
      }
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
