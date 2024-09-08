import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleSignUp } from "./userAPIs";
import { userDetailsAPIPayload } from "@/types/api";

export const signupUser = createAsyncThunk(
  "user/signupUser",
  async (userDetails: userDetailsAPIPayload) => {
    return await handleSignUp(userDetails);
  }
);
