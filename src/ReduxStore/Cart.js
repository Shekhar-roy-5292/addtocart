import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Slice/CartSlice";
const Cart = configureStore({
    reducer:CartSlice,
})
export default Cart;