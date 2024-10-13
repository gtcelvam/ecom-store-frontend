//Payment Functions
export type handleRazorypayOptionsProps = {
  amount: string | number;
  order: { id: string };
};

export type razorpayHandlerProps = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};
