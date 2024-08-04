import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,

  reducers: {
    addToFavorites: (state, action) => {
      if (!Array.isArray(state.products)) {
        state.products = [];
      }
      state.products.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      if (!Array.isArray(state.products)) {
        state.products = [];
      }
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
    emptyFavorites: (state) => {
      state.products = [];
    },
  },
});

export const { addToFavorites, removeFromFavorites, emptyFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
