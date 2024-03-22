import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Cart: [],
  quantity: 0,
};
const AddCartSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      state.Cart.push(action.payload);
    },
    DeleteFromCart: (state, action) => {
      state.Cart = state.Cart.filter((item) => item.id != action.payload);
    },
  },
});
export const { AddToCart, DeleteFromCart } = AddCartSlice.actions;
export default AddCartSlice.reducer;
