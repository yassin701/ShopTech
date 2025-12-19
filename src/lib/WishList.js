import { createSlice } from "@reduxjs/toolkit";


const storageWishlist = () => {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) :{
        WishlistItems :[],
    }
}

const initialState =  storageWishlist();


const WishlistSlice = createSlice({
    name: "WishList",
    initialState,
    reducers: {
        AddWishlist: (state, action) => {
            const item = action.payload;
            const exist = state.WishlistItems.find((i) => i.id === item.id);

            if (exist) {
                //for remove item  if exist
                state.WishlistItems = state.WishlistItems.filter((i) => i.id !== item.id);
            } else {
                // if not exist add item on wishlist
                state.WishlistItems.push(item)
            }
        },
        removeFromWishlist: (state, action) => {
            const id = action.payload;
            state.WishlistItems = state.WishlistItems.filter(i => i.id !== id);
        },


        clearWishlist: (state) => {
            state.WishlistItems = [];
        },
    },


});

export const {
    AddWishlist,
    removeFromWishlist,
    clearWishlist,
} = WishlistSlice.actions;

export default WishlistSlice.reducer;