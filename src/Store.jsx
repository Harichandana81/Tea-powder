// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "/src/cartSlice.jsx"// Example slice

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add your reducers here
  },
});

export default store; // Ensure the store is exported