import { loginForm, signUpForm } from "@/utils/constants";
import { AuthenticationType, OrderDetails, ProductCard } from "./constants";

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
  isCartLoading: boolean;
  products: ProductCard[];
  isCartError: boolean;
  isSuccessModelOpen: boolean;
}

export interface orderInitialState {
  isOrderLoading: boolean;
  orderDetails: OrderDetails[];
  isOrderError: boolean;
}
