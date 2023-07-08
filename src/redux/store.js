import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "../pages/CartSlice";

export const Store = configureStore({
    reducer:{
        cart: CartSlice
    }
});