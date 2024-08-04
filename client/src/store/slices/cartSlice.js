import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      if (!Array.isArray(state.products)) {
        state.products = [];
      }
      state.products.push(action.payload);
      state.total += action.payload.price;
    },
    removeFromCart: (state, action) => {
      if (!Array.isArray(state.products)) {
        state.products = [];
      }

      console.log("Current products:", state.products);
      console.log("Product to remove:", action.payload);

      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );

      state.total -= action.payload.price;

      console.log("Updated products:", state.products);
      console.log("Updated total:", state.total);
    },
    emptyCart: (state) => {
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
