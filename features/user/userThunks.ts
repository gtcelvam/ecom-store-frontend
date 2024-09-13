import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleLogin, handleSignUp } from "./userAPIs";
import { APIThunkResponseType, userDetailsAPIPayload } from "@/types/api";

export const signupUser = createAsyncThunk<
  APIThunkResponseType,
  userDetailsAPIPayload
>("user/signupUser", async (userDetails: userDetailsAPIPayload) => {
  return await handleSignUp(userDetails);
});

export const loginUser = createAsyncThunk<
  APIThunkResponseType,
  userDetailsAPIPayload
>("user/loginUser", async (userDetails: userDetailsAPIPayload) => {
  return await handleLogin(userDetails);
});
