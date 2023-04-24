import { configureStore } from "@reduxjs/toolkit";
import categories from '../slices/categoriesSlice';
import product from '../slices/singleProductSlice';
import filters from '../slices/filtersSlice';
import cart from '../slices/cartSlice';
import { apiSlice } from "../api/apiSlice";

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = configureStore({
    reducer: {categories, product, filters, cart, [apiSlice.reducerPath]: apiSlice.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware, apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;