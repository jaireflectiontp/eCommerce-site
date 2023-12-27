import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { getCartTotal } from "./slices/cartSlice";
import authSlice from "./slices/authSlice";
import productSlice from "./slices/productSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
    products: productSlice,
  },
});
store.dispatch(getCartTotal())
export default store;
