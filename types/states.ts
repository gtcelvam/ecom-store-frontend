import { loginForm, signUpForm } from "@/utils/constants";
import { AuthenticationType, ProductCard } from "./constants";

export type signupFormDataType = typeof signUpForm;
export type loginFormDataType = typeof loginForm;

export type authFormDataType = signupFormDataType | loginFormDataType;

//slice initial state types
export interface productIntialState {
  isProductLoading: boolean;
  isProductError: boolean;
  productList: ProductCard[];
}

export interface cartInitialState {
  products: ProductCard[];
}
