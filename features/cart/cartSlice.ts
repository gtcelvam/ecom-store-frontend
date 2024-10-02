import { cartInitialState } from "@/types/states";
import { createSlice } from "@reduxjs/toolkit";
import { getCartListByUserIdThunk, handleAddToCartThunk } from "./cartThunks";

const initialState: cartInitialState = {
  isCartLoading: false,
  products: [],
  isCartError: false,
};

const productSlice = createSlice({
  name: "cart-slice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Add to cart case
    builder.addCase(handleAddToCartThunk.pending, (state) => {
      state.isCartLoading = true;
    });
    builder.addCase(handleAddToCartThunk.fulfilled, (state, action) => {
      state.isCartLoading = false;
      state.products = [...state.products, action.payload as any];
    });
    builder.addCase(handleAddToCartThunk.rejected, (state) => {
      state.isCartLoading = false;
      state.isCartError = true;
    });

    //Get Cart Details
    builder.addCase(getCartListByUserIdThunk.pending, (state) => {
      state.isCartLoading = true;
    });
    builder.addCase(getCartListByUserIdThunk.fulfilled, (state, action) => {
      state.isCartLoading = false;
      state.products = action.payload as any;
    });
    builder.addCase(getCartListByUserIdThunk.rejected, (state) => {
      state.isCartLoading = false;
      state.isCartError = true;
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
