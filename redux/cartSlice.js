import { createDraftSafeSelector, createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products:Cookies.get('products') 
      ? JSON.parse(Cookies.get('products'))
      : [],
  },

  // products: Cookies.get('products') 
  // ? JSON.parse(Cookies.get('products'))
  // : [] ,
  // We can write the case reducers as functions inside of an object, instead of having to write a switch/case statement
  // The reducers will be able to write shorter immutable update logic
  // All the action creators will be generated automatically based on the reducer functions we've provided
  // reducers: an object where the keys are strings, and the values are "case reducer" functions that will handle specific actions
  reducers:{
    addProduct: (state,action) => {
      const products = state.products;
      const itemToAdd = action.payload;
      
      // To check for existing product in cart
      const itemExists = products.find((item) => item._id === itemToAdd._id);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        products.push({ ...itemToAdd, quantity: 1 });
      }
      // state.products.push(action.payload); // 1st push the incomingproduct 
      // state.quantity += 1; // then increase their quantity
      // state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state,action) => {
      const products = state.products;
      const itemToRemove = action.payload;
      const item = products.find((item) => item._id === itemToRemove._id);
      if (item.quantity === 1) {
        const index = products.findIndex((item) => item._id === itemToRemove._id);
        products.splice(index, 1);
      } else {
        item.quantity--;
      }
    }
    // reset: (state) => {
    //   state.products = [];
    //   state.quantity = 0;
    //   state.total = 0;
    // }
  }

})
export const selectProducts = (state) => state.cart.products
export const selectProductsCount = createDraftSafeSelector([selectProducts],
  (products) => products.reduce((accumulatedQuantity,product) => accumulatedQuantity + product.quantity,0)
);
export const selectCartTotal = createDraftSafeSelector([selectProducts],
  (products) => products.reduce((accumulatedPrice,product) => accumulatedPrice + product.quantity * product.price,0)
);
//console.log(selectProducts());
//The complete reducer function is available as slice.reducer
export const {addProduct,removeProduct} = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;