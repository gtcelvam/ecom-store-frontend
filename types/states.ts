import { loginForm, signUpForm } from "@/utils/constants";
import { AuthenticationType } from "./constants";

export type signupFormDataType = typeof signUpForm;
export type loginFormDataType = typeof loginForm;

export type authFormDataType = signupFormDataType | loginFormDataType;
