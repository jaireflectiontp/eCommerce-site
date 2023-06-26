import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "formSlice",
  initialState: [],
  reducers: {
    registerUser(state, action) {
      state.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state));
    },

    loginUser(state, action) {},
  },
});

export const { registerUser, loginUser } = formSlice.actions;
export default formSlice.reducer;
