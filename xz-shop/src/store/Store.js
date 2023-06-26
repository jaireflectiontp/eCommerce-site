import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import formSlice from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    form: formSlice,
  },
});

export default store;
