import {
  COOKIE_ACCESS_TOKEN,
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

export const handleRazorPay = async (amount: number | string) => {
  //constant
  const token = handleCookie.get(COOKIE_ACCESS_TOKEN);
  try {
    const res = await loadScipt(RAZOR_PAY_URL);
    if (!res) return alert("You're offline");

    const { data: order } = await instance.post(
      paymentRoute.createPayment,
      { amount },
      { ...getAuthHeader({ token }) }
    );

    const options = handleRazorpayOptons({ amount, order });
    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  } catch (error) {
    console.log("Error : ", error);
  }
};

const handleRazorpayOptons = (payload: handleRazorypayOptionsProps) => {
  const { amount, order } = payload;

  //constant
  const token = handleCookie.get(COOKIE_ACCESS_TOKEN);

  return {
    key: RAZOR_PAY_ID,
    currency: "INR",
    amount: Number(amount) * 100,
    name: "TS Razor Pay Test",
    description: "Thanks for purchasing",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fmoney-png&psig=AOvVaw0DHOrpgot4oisKFiTZcdl6&ust=1691130308942000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMigubztv4ADFQAAAAAdAAAAABAE",
    order_id: order?.id,
    modal: {
      ondismiss() {
        alert("Modal Closed by the User");
      },
    },
    handler: async (res: razorpayHandlerProps) => {
      console.log("Response : ", res);
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
      if (result.message) {
        handleSuccessMessage("Payment successful!");
      } else {
        handleErrorMessage("Payment failed. Please try again.");
      }
    },
    prefill: {
      name: "Testing Purpose",
    },
  };
};
