import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsByPage } from "./productAPI";

export const getProductListThunk = createAsyncThunk<any>(
  "product/getProductList",
  async () => {
    return await getProductsByPage();
  }
);
