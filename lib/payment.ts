import {
  COOKIE_ACCESS_TOKEN,
  LOGO_URL,
  paymentStatus,
  RAZOR_PAY_ID,
  RAZOR_PAY_URL,
} from "@/utils/constants";
import { handleRazorypayOptionsProps, razorpayHandlerProps } from "@/types";
import instance from "./axios";
import {
  getAuthHeader,
  handleCookie,
  handleErrorMessage,
  handleSuccessMessage,
  loadScipt,
} from "@/utils/helpers";
import { paymentRoute } from "./apiList";
import { Dispatch } from "react";
import { UnknownAction } from "@reduxjs/toolkit";
import { handleSuccessModel } from "@/features/cart/cartSlice";

interface razoryPaymentPayload {
  amount: number;
  order: {
    id: number;
  };
  dispatch: Dispatch<UnknownAction>;
}

export const handleRazorPay = async (payload: razoryPaymentPayload) => {
  //constant
  const token = handleCookie.get(COOKIE_ACCESS_TOKEN);
  const { dispatch, ...rest } = payload;
  try {
    const res = await loadScipt(RAZOR_PAY_URL);
    if (!res) return alert("You're offline");

    const {
      data: { data: order },
    } = await instance.post(paymentRoute.createPayment, rest, {
      ...getAuthHeader({ token }),
    });

    const options = handleRazorpayOptons({
      ...order,
      dispatch,
      orderId: rest.order.id,
    });
    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  } catch (error) {
    console.log("Error : ", error);
  }
};

export const handleVerifyPayment = async (
  res: razorpayHandlerProps,
  dispatch: Dispatch<UnknownAction>
) => {
  //constant
  const token = handleCookie.get(COOKIE_ACCESS_TOKEN);
  try {
    const data = {
      razorpay_order_id: res.razorpay_order_id,
      razorpay_payment_id: res.razorpay_payment_id,
      razorpay_signature: res.razorpay_signature,
      orderId: res.orderId,
    };

    // Verify payment on the backend
    const { data: result }: any = await instance.post(
      paymentRoute.verifyPayment,
      data,
      {
        ...getAuthHeader({ token }),
      }
    );
    if (result.data === paymentStatus.success) {
      handleSuccessMessage("Payment successful!");
      dispatch(handleSuccessModel(true));
    } else if (result.data === paymentStatus.failure) {
      handleErrorMessage("Payment failed. Please try again.");
    }
  } catch (error) {
    console.log("Verify Payment Error : ", error);
    handleErrorMessage("Something Went Wrong");
  }
};

const handleRazorpayOptons = (payload: handleRazorypayOptionsProps) => {
  const { id, amount, orderId, dispatch } = payload;

  return {
    key: RAZOR_PAY_ID,
    currency: "INR",
    amount: Number(amount),
    name: "TS Razor Pay",
    description: "Thanks for purchasing",
    image: LOGO_URL,
    order_id: id,
    modal: {
      ondismiss() {
        alert("Modal Closed by the User");
      },
    },
    handler: async (res: razorpayHandlerProps) => {
      handleVerifyPayment({ ...res, orderId }, dispatch);
    },
    prefill: {
      name: "Testing Purpose",
    },
  };
};
