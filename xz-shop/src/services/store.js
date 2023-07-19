import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
//import formSlice from "./slices/formSlice";
import authSlice from "./slices/authSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    // form: formSlice,
    auth: authSlice,
    products: productSlice
  },
});

export default store;
