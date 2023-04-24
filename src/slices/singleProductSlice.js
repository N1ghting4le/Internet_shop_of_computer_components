import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const productAdapter = createEntityAdapter();

const initialState = productAdapter.getInitialState({
    currentProduct: {}
});

const singleProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setCurrentProduct: (state, action) => {
            state.currentProduct = action.payload
        }
    }
});

const {actions, reducer} = singleProductSlice;
export default reducer;
export const {
    setCurrentProduct
} = actions
