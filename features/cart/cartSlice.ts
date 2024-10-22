import {
  handleAddToCartThunk,
  getCartListByUserIdThunk,
  handleDeleteProductByIdThunk,
  clearCartThunk,
} from "./cartThunks";
import { createSlice } from "@reduxjs/toolkit";
import { cartInitialState } from "@/types/states";
import { getUpdatedProductList } from "@/utils/helpers";

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

    //Delete Product By Id
    builder.addCase(handleDeleteProductByIdThunk.pending, (state) => {
      state.isCartLoading = true;
    });
    builder.addCase(handleDeleteProductByIdThunk.fulfilled, (state, action) => {
      state.isCartLoading = false;
      state.products = getUpdatedProductList(
        state.products,
        action.payload as any
      );
    });
    builder.addCase(handleDeleteProductByIdThunk.rejected, (state) => {
      state.isCartLoading = false;
      state.isCartError = true;
    });

    //Clear Cart
    builder.addCase(clearCartThunk.pending, (state) => {
      state.isCartLoading = true;
    });
    builder.addCase(clearCartThunk.fulfilled, (state, action) => {
      state.isCartLoading = false;
      state.products = action.payload as any;
    });
    builder.addCase(clearCartThunk.rejected, (state) => {
      state.isCartLoading = false;
      state.isCartError = true;
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
