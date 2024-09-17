import { SampleProductList } from "@/utils/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [] as typeof SampleProductList,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    handleAddToCartAction: (state, action) => {
      state.products = [
        ...state.products,
        action.payload,
      ] as typeof initialState.products;
    },
  },
});

export const { handleAddToCartAction } = productSlice.actions;

export default productSlice.reducer;
