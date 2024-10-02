import { userDetailsAPIPayload } from "@/types/api";
import instance from "@/lib/axios";
import { authAPIList } from "@/lib/apiList";
import {
  getAuthHeader,
  handleCookie,
  handleErrorMessage,
  handleSuccessMessage,
  handleToaster,
} from "@/utils/helpers";
import { COOKIE_ACCESS_TOKEN } from "@/utils/constants";

export const handleSignUp = async (userDetails: userDetailsAPIPayload) => {
  try {
    const { data }: any = await instance.post(authAPIList.signup, userDetails);
    const { data: userData, token } = data;
    handleCookie.set(COOKIE_ACCESS_TOKEN, token);
    return userData[0];
  } catch (error) {
    console.log("Sign up error : ", error);
    handleToaster().error("Sign up error");
    throw error;
  }
};

export const handleLogin = async (userDetails: userDetailsAPIPayload) => {
  try {
    const { data }: any = await instance.post(authAPIList.login, userDetails);
    const { data: userData, token } = data;
    handleCookie.set(COOKIE_ACCESS_TOKEN, token);
    handleSuccessMessage("Successfully Logged In!!!");
    return userData[0];
  } catch (error: any) {
    console.log("Login error : ", error);
    handleErrorMessage(error);
    throw error;
  }
};

export const getUserDetails = async (token: string | undefined) => {
  try {
    if (token) {
      const payload = {
        token,
      };
      const { data }: any = await instance.get(
        authAPIList.getUser,
        getAuthHeader(payload)
      );
      return data?.data;
    }
    return null;
  } catch (error) {
    console.log("Get User Details Error : ", error);
    return null;
  }
};
