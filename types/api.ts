import { loginForm, signUpForm } from "@/utils/constants";
import { userDataType } from "./constants";

export type userDetailsAPIPayload = typeof signUpForm | typeof loginForm;

export type addToCartAPIPayload = {
  productId: (string | number)[];
  userId: string | number;
};

export type APIThunkResponseType = {
  success: boolean;
  data: userDataType;
  token: string;
};
