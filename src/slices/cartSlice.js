import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState({
    totalPrice: 0,
    totalAmount: 0,
    cartItems: []
});

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increaseTotalPrice: (state, action) => {
            state.totalPrice = state.totalPrice + action.payload
        },
        decreaseTotalPrice: (state, action) => {
            state.totalPrice = state.totalPrice - action.payload
        },
        increaseTotalAmount: (state, action) => {
            state.totalAmount = state.totalAmount + action.payload
        },
        decreaseTotalAmount: (state, action) => {
            state.totalAmount = state.totalAmount - action.payload
        },
        addItem: (state, action) => {
            state.cartItems.push(action.payload)
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
        },
        increaseItemAmount: (state, action) => {
            state.cartItems = state.cartItems.map(item => item.id === action.payload ? {...item, amount: item.amount + 1} : item)
        },
        decreaseItemAmount: (state, action) => {
            state.cartItems = state.cartItems.map(item => item.id === action.payload ? {...item, amount: item.amount - 1} : item)
        },
        toggleInitial: state => {
            state.initial = false;
        }
    }
});

const {actions, reducer} = cartSlice;
export default reducer;
export const {
    increaseTotalAmount,
    increaseTotalPrice,
    decreaseTotalAmount,
    decreaseTotalPrice,
    addItem,
    removeItem,
    increaseItemAmount,
    decreaseItemAmount
} = actions;