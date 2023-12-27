import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartProducts: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,

  },
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartProducts[existingIndex] = {
          ...state.cartProducts[existingIndex],
          cartQuantity: state.cartProducts[existingIndex].cartQuantity + 1,
        };

      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartProducts.push(tempProductItem);
      }
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartProducts[itemIndex].cartQuantity > 1) {
        state.cartProducts[itemIndex].cartQuantity -= 1;

      } else if (state.cartProducts[itemIndex].cartQuantity === 1) {
        const nextcartProducts = state.cartProducts.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartProducts = nextcartProducts;
      }

      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
    removeFromCart(state, action) {
      state.cartProducts.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextcartProducts = state.cartProducts.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartProducts = nextcartProducts;

        }
        localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
        return state;
      });
    },
    getCartTotal(state) {
      const { total, quantity } = state.cartProducts?.reduce((cartTotal, cartItem) => {
        const { price, cartQuantity } = cartItem
        let totalAmount = price * cartQuantity
        cartTotal.total += totalAmount
        cartTotal.quantity += cartQuantity

        return cartTotal
      },
        {
          total: 0,
          quantity: 0
        }
      );
      state.cartTotalQuantity = quantity
      state.cartTotalAmount = total
    },
  }
});
export const { addToCart, removeFromCart, decreaseCart, decrementQuantity, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;
