import { Dispatch } from "react";
import { UnknownAction } from "@reduxjs/toolkit";

//Payment Functions
export type handleRazorypayOptionsProps = {
  amount: string | number;
  id: string;
  dispatch: Dispatch<UnknownAction>;
};

export type razorpayHandlerProps = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};
