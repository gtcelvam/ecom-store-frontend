import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIThunkResponseType } from "@/types/api";
import { getOrderDetailsByEmail } from "./orderAPI";

export const getOrderDetailsByEmailThunk =
  createAsyncThunk<APIThunkResponseType>(
    "order/getOrderDetailsByEmailThunk",
    async () => await getOrderDetailsByEmail()
  );
