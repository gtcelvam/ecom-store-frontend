import { createSlice } from "@reduxjs/toolkit";
import { signupUser } from "./userThunks";
import { AuthenticationType } from "@/types/constants";

const initialState = {
  isAuthOpen: false,
  formType: AuthenticationType.login,
  isLoading: false,
  userData: {},
  isError: false,
};

const userSlice = createSlice({
  name: "user-slice",
  initialState: initialState,
  reducers: {
    handleSetAuthOpen: (state, action) => {
      state.isAuthOpen = action.payload;
    },
    handleFormType: (state, action) => {
      state.formType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { handleFormType, handleSetAuthOpen } = userSlice.actions;

export default userSlice.reducer;
