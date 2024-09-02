import React, { FC, useState } from "react";
import CustomDialog from "../elements/CustomDialog";
import {
  AuthenticationComponentProps,
  CustomDialogProps,
} from "@/types/component";
import { AuthenticationType } from "@/types/constants";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const AuthenticationComponent: FC<AuthenticationComponentProps> = (props) => {
  //props
  const { open, handleClose, type } = props;

  //constants
  const isLogin = type === AuthenticationType.login;

  const authenticationTitle: Partial<CustomDialogProps> = {
    title: isLogin ? "LOGIN" : "SIGN UP",
    description: "",
    buttonText: isLogin ? "LOGIN" : "SIGN UP",
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
      {isLogin ? <LoginComponent /> : <SignInComponent />}
    </CustomDialog>
  );
};

const SignInComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">PLEASE ENTER YOUR NAME</Label>
        <Input id="name" placeholder="Name" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">PLEASE ENTER YOUR EMAIL</Label>
        <Input id="email" placeholder="Email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">PLEASE ENTER YOUR PASSWORD</Label>
        <Input id="password" placeholder="Password" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="confirm-password">
          PLEASE ENTER YOUR CONFIRM PASSWORD
        </Label>
        <Input id="confirm-password" placeholder="Confrim Password" />
      </div>
    </div>
  );
};

const LoginComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">PLEASE ENTER YOUR EMAIL</Label>
        <Input id="email" placeholder="Email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">PLEASE ENTER YOUR PASSWORD</Label>
        <Input id="password" placeholder="Password" />
      </div>
    </div>
  );
};

export default AuthenticationComponent;
