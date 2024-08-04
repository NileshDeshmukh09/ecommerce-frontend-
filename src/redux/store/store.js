import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import productReducer from "../slices/productSlice";
import authSlice from "../slices/authSlice";
import snackbarReducer from "../slices/snackbarSlice";
 
const store = configureStore({
    reducer : {
        auth : authSlice,
        cart : cartReducer,
        product : productReducer,
        snackbar : snackbarReducer
    }
})

export default store;