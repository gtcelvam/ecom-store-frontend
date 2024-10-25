import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addToCartAPIArgs,
  addToCartAPIPayload,
  APIThunkResponseType,
  deleteFromCartAPIPayload,
} from "@/types/api";
import {
  getCartListByUserId,
  handleAddToCartAPI,
  handleClearCart,
  handleDeleteProductById,
} from "./cartAPI";

export const handleAddToCartThunk = createAsyncThunk<
  APIThunkResponseType,
  addToCartAPIArgs
>("cart/handleAddToCartThunk", async (args) => {
  return await handleAddToCartAPI(args.payload, args.loader);
});

export const getCartListByUserIdThunk = createAsyncThunk<
  APIThunkResponseType,
  string
>("cart/getCartListByUserIdThunk", async (id) => await getCartListByUserId(id));

export const handleDeleteProductByIdThunk = createAsyncThunk<
  APIThunkResponseType,
  deleteFromCartAPIPayload
>(
  "cart/handleDeleteProductByIdThunk",
  async (payload) => await handleDeleteProductById(payload)
);

export const clearCartThunk = createAsyncThunk(
  "cart/clearCartThunk",
  async (id: string) => await handleClearCart(id)
);
