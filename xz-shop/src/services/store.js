import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
//import formSlice from "./slices/formSlice";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    // form: formSlice,
    auth: authSlice
  },
});

export default store;
