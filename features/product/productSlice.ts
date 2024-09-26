import { createSlice } from "@reduxjs/toolkit";
import { getProductListThunk } from "./productThunks";
import { productIntialState } from "@/types/states";

const initialState: productIntialState = {
  isProductLoading: false,
  productList: [],
  isProductError: false,
};

const productSlice = createSlice({
  name: "product-slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductListThunk.pending, (state) => {
      state.isProductLoading = true;
    });

    builder.addCase(getProductListThunk.fulfilled, (state, action) => {
      state.productList = action.payload;
      state.isProductLoading = false;
    });

    builder.addCase(getProductListThunk.rejected, (state) => {
      state.isProductLoading = false;
      state.isProductError = true;
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
