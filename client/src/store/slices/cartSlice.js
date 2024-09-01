import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  // total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      if (!Array.isArray(state.products)) {
        state.products = [];
      }
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity || 1;
        // state.total += existingProduct.price;
        return;
      }
      state.products.push(action.payload);
      // state.total += action.payload.price;
    },
    removeFromCart: (state, action) => {
      if (!Array.isArray(state.products)) {
        state.products = [];
      }
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      // state.total -= action.payload.price;
    },
    emptyCart: (state) => {
      state.products = [];
      // state.total = 0;
    },
    incrementQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  emptyCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
