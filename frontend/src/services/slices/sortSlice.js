import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        sortType: '',
    },
    reducers: {
        setSortType: (state, action) => {
            state.sortType = action.payload;
            console.log('ffgf', action.payload)
        },
    },
});

export const { setProducts, setSortType } = productSlice.actions;

export default productSlice.reducer;