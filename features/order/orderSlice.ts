import { createSlice } from "@reduxjs/toolkit";
import { getOrderDetailsByEmailThunk } from "./orderThunks";
import { orderInitialState } from "@/types/states";

const initialState: orderInitialState = {
  isOrderLoading: false,
  orderDetails: [],
  isOrderError: false,
};

const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get all order details
    builder.addCase(getOrderDetailsByEmailThunk.pending, (state) => {
      state.isOrderLoading = true;
    });

    builder.addCase(getOrderDetailsByEmailThunk.fulfilled, (state, action) => {
      state.isOrderLoading = false;
      state.orderDetails = action.payload as any;
    });

    builder.addCase(getOrderDetailsByEmailThunk.rejected, (state) => {
      state.isOrderLoading = false;
      state.isOrderError = true;
    });
  },
});

const {} = orderSlice.actions;

export default orderSlice.reducer;
