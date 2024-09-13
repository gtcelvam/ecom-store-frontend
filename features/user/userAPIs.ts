import { userDetailsAPIPayload } from "@/types/api";
import instance from "@/lib/axios";
import { authAPIList } from "@/lib/apiList";
import { handleCookie } from "@/utils/helpers";
import { COOKIE_ACCESS_TOKEN } from "@/utils/constants";

export const handleSignUp = async (userDetails: userDetailsAPIPayload) => {
  try {
    const { data }: any = await instance.post(authAPIList.signup, userDetails);
    return data?.data;
  } catch (error) {
    console.log("Sign up error : ", error);
  }
};

export const handleLogin = async (userDetails: userDetailsAPIPayload) => {
  try {
    const { data }: any = await instance.post(authAPIList.login, userDetails);
    const { data: userData, token } = data;
    handleCookie.set(COOKIE_ACCESS_TOKEN, token);
    return userData[0];
  } catch (error) {
    console.log("Sign up error : ", error);
  }
};
