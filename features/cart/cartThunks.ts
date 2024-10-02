import { addToCartAPIPayload, APIThunkResponseType } from "@/types/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCartListByUserId, handleAddToCartAPI } from "./cartAPI";

export const handleAddToCartThunk = createAsyncThunk<
  APIThunkResponseType,
  addToCartAPIPayload
>("cart/handleAddToCartThunk", async (payload) => {
  return await handleAddToCartAPI(payload);
});

export const getCartListByUserIdThunk = createAsyncThunk<
  APIThunkResponseType,
  string
>("cart/getCartListByUserIdThunk", async (id) => await getCartListByUserId(id));
