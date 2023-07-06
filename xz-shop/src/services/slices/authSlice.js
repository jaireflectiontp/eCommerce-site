import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        users: [],
        currentUser: null,
    },
    reducers: {
        registerUser: (state, action) => {
            state.users.push(action.payload);
        },
        loginUser: (state, action) => {
            state.currentUser = action.payload
            localStorage.setItem('currentUser', JSON.stringify(action.payload));
            sessionStorage.setItem('email', action.payload.email);
        },
    },
});

export const { registerUser, loginUser } = authSlice.actions;

export default authSlice.reducer;
