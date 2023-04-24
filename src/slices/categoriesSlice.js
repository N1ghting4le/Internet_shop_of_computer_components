import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const categoriesAdapter = createEntityAdapter();

const initialState = categoriesAdapter.getInitialState({
    currentCategory: ''
});

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCurrentCategory: (state, action) => {
            state.currentCategory = action.payload
        }
    }
});

const {actions, reducer} = categoriesSlice;
export default reducer;
export const {
    setCurrentCategory
} = actions;