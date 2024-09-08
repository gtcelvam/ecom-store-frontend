import React, { FC, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import CustomDialog from "../elements/CustomDialog";
import {
  AuthenticationComponentProps,
  CustomDialogProps,
  SignInComponentProps,
} from "@/types/component";
import { AuthenticationType } from "@/types/constants";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { handleFormType } from "@/features/user/userSlice";
import { loginFormDataType, signupFormDataType } from "@/types/states";
import { loginForm, signUpForm } from "@/utils/constants";
import { onChangeEvent } from "@/types/events";

const AuthenticationComponent: FC<AuthenticationComponentProps> = (props) => {
  //props
  const { open, handleClose, type } = props;

  //hooks
  const dispatch = useDispatch();

  //constants
  const isLogin = type === AuthenticationType.login;

  const authenticationTitle: Partial<CustomDialogProps> = {
    title: isLogin ? "LOGIN" : "SIGN UP",
    description: "",
    buttonText: isLogin ? "LOGIN" : "SIGN UP",
  };

  //functions
  const handleSwitchAuth = (type: AuthenticationType) => {
    dispatch(handleFormType(type));
  };

  if (!open) return <></>;

  return (
    <CustomDialog
      title={authenticationTitle.title as string}
      description={authenticationTitle.description as string}
      buttonText={authenticationTitle.buttonText as string}
      onSubmit={() => null}
      handleClose={handleClose}
    >
      {isLogin ? (
        <LoginComponent handleSwitchAuth={handleSwitchAuth} />
      ) : (
        <SignInComponent handleSwitchAuth={handleSwitchAuth} />
      )}
    </CustomDialog>
  );
};

const SignInComponent: FC<SignInComponentProps> = (props) => {
  //props
  const { handleSwitchAuth } = props;

  //state values
  const [formData, setFormData] = useState<signupFormDataType>(signUpForm);

  //functions
  const handleFormChange = (e: onChangeEvent) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">PLEASE ENTER YOUR NAME</Label>
        <Input
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleFormChange}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">PLEASE ENTER YOUR EMAIL</Label>
        <Input
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleFormChange}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">PLEASE ENTER YOUR PASSWORD</Label>
        <Input
          id="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleFormChange}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="confirm-password">
          PLEASE ENTER YOUR CONFIRM PASSWORD
        </Label>
        <Input
          id="confirm-password"
          name="confirmPassword"
          placeholder="Confrim Password"
          value={formData.confirmPassword}
          onChange={handleFormChange}
        />
      </div>
      <p>
        Already having account?{" "}
        <span
          className="cursor-pointer"
          onClick={() => handleSwitchAuth(AuthenticationType.login)}
        >
          Login
        </span>
      </p>
    </div>
  );
};

const LoginComponent: FC<SignInComponentProps> = (props) => {
  //props
  const { handleSwitchAuth } = props;

  //state values
  const [formData, setFormData] = useState<loginFormDataType>(loginForm);

  //functions
  const handleFormChange = (e: onChangeEvent) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">PLEASE ENTER YOUR EMAIL</Label>
        <Input
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleFormChange}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">PLEASE ENTER YOUR PASSWORD</Label>
        <Input
          id="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleFormChange}
        />
      </div>
      <p>
        Don&apos;t have account yet?{" "}
        <span
          className="cursor-pointer"
          onClick={() => handleSwitchAuth(AuthenticationType.signup)}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default AuthenticationComponent;
