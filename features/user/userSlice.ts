import { createSlice } from "@reduxjs/toolkit";
import { loginUser, signupUser } from "./userThunks";
import { AuthenticationType, userDataType } from "@/types/constants";
import { COOKIE_ACCESS_TOKEN, defaultUserData } from "@/utils/constants";
import { handleCookie } from "@/utils/helpers";

const initialState = {
  isAuthOpen: false,
  formType: AuthenticationType.login,
  isLoading: false,
  userData: {
    name: "",
    email: "",
    id: "",
    mobile: "",
  },
  isUserLoggedIn: false,
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
    handleUserLoginByToken: (state, action) => {
      state.userData = action.payload;
      state.isUserLoggedIn = true;
    },
    handleUserLogout: (state) => {
      state.userData = defaultUserData;
      state.isUserLoggedIn = false;
      handleCookie.clear(COOKIE_ACCESS_TOKEN);
    },
  },
  extraReducers: (builder) => {
    // Signup user case
    builder.addCase(signupUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userData = action.payload as any;
      state.isUserLoggedIn = true;
      state.isAuthOpen = false;
    });
    builder.addCase(signupUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    //Login User Case
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userData = action.payload as any;
      state.isUserLoggedIn = true;
      state.isAuthOpen = false;
    });

    builder.addCase(loginUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const {
  handleFormType,
  handleSetAuthOpen,
  handleUserLoginByToken,
  handleUserLogout,
} = userSlice.actions;

export default userSlice.reducer;
