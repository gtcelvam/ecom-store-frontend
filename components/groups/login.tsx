import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import {
  authFormDataType,
  loginFormDataType,
  signupFormDataType,
} from "@/types/states";
import { LOADERS, loginForm, signUpForm } from "@/utils/constants";
import { onChangeEvent } from "@/types/events";
import { loginUser, signupUser } from "@/features/user/userThunks";
import { RootState } from "@/lib/store";
import { Loader } from "../elements/Loader";
import OAuthComponent from "./oAuthComponent";

const AuthenticationComponent: FC<AuthenticationComponentProps> = (props) => {
  //props
  const { open, handleClose, type } = props;

  //state values
  const [formData, setFormData] = useState<authFormDataType>(signUpForm);
  const { isLoading: isAuthLoading } = useSelector(
    (state: RootState) => state.user
  );

  //functions
  const handleFormChange = (e: onChangeEvent) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //hooks
  const dispatch = useDispatch();

  //constants
  const isLogin = type === AuthenticationType.login;
  const emptyData = isLogin ? loginForm : signUpForm;

  const authenticationTitle: Partial<CustomDialogProps> = {
    title: isLogin ? "LOGIN" : "SIGN UP",
    description: "",
    buttonText: isLogin ? "LOGIN" : "SIGN UP",
  };

  //functions
  const handleSwitchAuth = (type: AuthenticationType) => {
    dispatch(handleFormType(type));
  };

  const handleSubmit = () => {
    if (type === AuthenticationType.login) {
      dispatch<any>(loginUser(formData));
      return;
    }
    const { confirmPassword, ...rest } = formData as signupFormDataType;
    dispatch<any>(signupUser(rest));
    setFormData(emptyData);
  };

  //useEffects
  useEffect(() => {
    return () => {
      setFormData(emptyData);
    };
  }, []);

  if (!open) return <></>;

  return (
    <CustomDialog
      title={authenticationTitle.title as string}
      description={authenticationTitle.description as string}
      buttonText={
        isAuthLoading ? (
          <Loader {...LOADERS.rippleBlackLoader} />
        ) : (
          (authenticationTitle.buttonText as string)
        )
      }
      onSubmit={handleSubmit}
      handleClose={handleClose}
    >
      {isLogin ? (
        <LoginComponent
          formData={formData}
          handleFormChange={handleFormChange}
          handleSwitchAuth={handleSwitchAuth}
        />
      ) : (
        <SignInComponent
          formData={formData as signupFormDataType}
          handleFormChange={handleFormChange}
          handleSwitchAuth={handleSwitchAuth}
        />
      )}
    </CustomDialog>
  );
};

const SignInComponent: FC<SignInComponentProps<signupFormDataType>> = (
  props
) => {
  //props
  const { formData, handleFormChange, handleSwitchAuth } = props;

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
        <Label htmlFor="email">PLEASE ENTER YOUR MOBILE NUMBER</Label>
        <Input
          id="number"
          name="mobile"
          placeholder="Phone Number"
          value={formData.mobile}
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
      <OAuthComponent />
    </div>
  );
};

const LoginComponent: FC<SignInComponentProps<loginFormDataType>> = (props) => {
  //props
  const { formData, handleFormChange, handleSwitchAuth } = props;

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
      <OAuthComponent />
    </div>
  );
};

export default AuthenticationComponent;
