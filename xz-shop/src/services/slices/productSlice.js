
import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../../utils/api';

const initialState = {
    productList: [],
    loading: false,
    error: null,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.productList = action.payload;

        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        applyFilters: (state, action) => {
            state.filteredProductList = action.payload;
        },
    },
});

export const { setProducts, setLoading, setError, applyFilters } = productSlice.actions;

export const fetchProductsAsync = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const products = await fetchProducts();
        dispatch(setProducts(products));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export default productSlice.reducer;
