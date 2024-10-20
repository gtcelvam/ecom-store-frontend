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

interface razoryPaymentPayload {
  amount: number;
  order: {
    id: number;
  };
}

export const handleRazorPay = async (payload: razoryPaymentPayload) => {
  //constant
  const token = handleCookie.get(COOKIE_ACCESS_TOKEN);
  try {
    const res = await loadScipt(RAZOR_PAY_URL);
    if (!res) return alert("You're offline");

    const {
      data: { data: order },
    } = await instance.post(paymentRoute.createPayment, payload, {
      ...getAuthHeader({ token }),
    });

    const options = handleRazorpayOptons(order);
    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  } catch (error) {
    console.log("Error : ", error);
  }
};

export const handleVerifyPayment = async (res: razorpayHandlerProps) => {
  //constant
  const token = handleCookie.get(COOKIE_ACCESS_TOKEN);
  try {
    const data = {
      razorpay_order_id: res.razorpay_order_id,
      razorpay_payment_id: res.razorpay_payment_id,
      razorpay_signature: res.razorpay_signature,
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
    } else if (result.data === paymentStatus.failure) {
      handleErrorMessage("Payment failed. Please try again.");
    }
  } catch (error) {
    console.log("Verify Payment Error : ", error);
    handleErrorMessage("Something Went Wrong");
  }
};

const handleRazorpayOptons = (payload: handleRazorypayOptionsProps) => {
  const { id, amount } = payload;

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
      handleVerifyPayment(res);
    },
    prefill: {
      name: "Testing Purpose",
    },
  };
};
