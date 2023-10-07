/*import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        users: [],
        currentUser: null,
    },
    reducers: {

        registerUser: (state, action) => {
            state.users.push(action.payload)
        },
        loginUser: (state, action) => {
            state.currentUser = action.payload
            console.log('check', action.payload)
            localStorage.setItem('currentUser', JSON.stringify(action.payload));
            sessionStorage.setItem('email', action.payload.email);
        },
    },
});

export const { registerUser, loginUser } = authSlice.actions;

export default authSlice.reducer;*/

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        users: [], // You can keep an array of registered users here
        currentUser: JSON.parse(sessionStorage.getItem('currentUser')) || null,
    },
    reducers: {
        registerUser: (state, action) => {
            state.users.push(action.payload);
            localStorage.setItem('users', JSON.stringify(state.users));
        },
        loginUser: (state, action) => {
            state.currentUser = action.payload;
            localStorage.setItem('currentUser', JSON.stringify(action.payload));
            sessionStorage.setItem('currentUser', JSON.stringify(action.payload));
        },
        logoutUser: (state) => {
            state.currentUser = null;
            localStorage.removeItem('currentUser');
            sessionStorage.removeItem('currentUser');
        },
    },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;

