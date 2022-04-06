import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },

  // We can write the case reducers as functions inside of an object, instead of having to write a switch/case statement
  // The reducers will be able to write shorter immutable update logic
  // All the action creators will be generated automatically based on the reducer functions we've provided
  // reducers: an object where the keys are strings, and the values are "case reducer" functions that will handle specific actions
  reducers:{
    addProduct: (state,action) => {
      state.products.push(action.payload); // 1st push the incomingproduct 
      state.quantity += 1; // then increase their quantity
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    }
  }

})
//The complete reducer function is available as slice.reducer
export const {addProduct,reset} = cartSlice.actions;
export default cartSlice.reducer;