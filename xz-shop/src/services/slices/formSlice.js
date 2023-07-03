import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "formSlice",
  initialState: {
    userList: null,
    loggedUser: null,
  },

  reducers: {
    pageLoad(state, action) {
      state.userList = action.payload;
      console.log("pageLoaded", state.userList);
    },

    registerUser(state, action) {
      state.userList.push(action.payload);
      localStorage.setItem("userList", JSON.stringify(state.userList));
    },

    activeUser(state, action) {
      state.loggedUser = action.payload;
      localStorage.setItem("activeUserData", JSON.stringify(action.payload));
    },
  },
});

export const { registerUser, activeUser, pageLoad } = formSlice.actions;
export default formSlice.reducer;
