import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    activeFilters: []
});

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addActiveFilter: (state, action) => {
            state.activeFilters.push(action.payload);
        },
        removeActiveFilter: (state, action) => {
            state.activeFilters = state.activeFilters.filter(item => item.value !== action.payload);
        },
        removeAllFilters: (state) => {
            state.activeFilters = [];
        }
    }
});

const {actions, reducer} = filtersSlice;
export default reducer;
export const {
    addActiveFilter,
    removeActiveFilter,
    removeAllFilters
} = actions;