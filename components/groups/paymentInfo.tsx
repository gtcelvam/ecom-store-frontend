import { RootState } from "@/lib/store";
import { LOADERS, RUPEES_SNIPPET } from "@/utils/constants";
import {
  getCreateOrderPayload,
  handlePaymentSummary,
  handleToaster,
} from "@/utils/helpers";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { handleRazorPay } from "@/lib/payment";
import { handleCreateOrder } from "@/features/order/orderAPI";
import { Loader } from "../elements/Loader";
import { clearCartThunk } from "@/features/cart/cartThunks";

const PaymentInfoComponent = () => {
  //state values
  const { products } = useSelector((state: RootState) => state.cart);
  const {
    userData: { id },
  } = useSelector((state: RootState) => state.user);
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);

  //hooks
  const dispatch = useDispatch();

  //constants
  const { orderSummary, additionalCharges, totalAmount } =
    handlePaymentSummary(products);
  const commonStyles = "flex items-center justify-between m-4";

  //funtions
  const handleMakePayment = async () => {
    setIsPaymentLoading(true);
    try {
      const payload = getCreateOrderPayload(products);
      const orderResult = await handleCreateOrder(payload);

      //payment payload
      const paymentPayload = {
        amount: totalAmount,
        order: {
          id: orderResult?.id,
        },
        dispatch,
      };
      handleRazorPay(paymentPayload).then(() =>
        dispatch<any>(clearCartThunk(id))
      );
    } catch (error) {
      console.log("Handle Make Payment Error : ", error);
      handleToaster().error("Payment Failed!!");
    } finally {
      setIsPaymentLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      {/* Section  */}
      <div className={commonStyles}>
        <p className="text-gray-400">Order Summary :</p>
        <p>
          {RUPEES_SNIPPET}
          {orderSummary}
        </p>
      </div>
      {/* Section Ends Here */}
      {/* Section  */}
      <div className={commonStyles}>
        <p className="text-gray-400">Additional Charges :</p>
        <p>
          {RUPEES_SNIPPET}
          {additionalCharges}
        </p>
      </div>
      {/* Section Ends Here */}
      {/* Section  */}
      <div className={commonStyles}>
        <p className="text-gray-500 font-bold">Total Amount :</p>
        <p className="font-bold">
          {RUPEES_SNIPPET}
          {totalAmount}
        </p>
      </div>
      {/* Section Ends Here */}
      <Button className="w-[200px] self-center" onClick={handleMakePayment}>
        {isPaymentLoading ? (
          <Loader {...LOADERS.rippleBlackLoader} />
        ) : (
          "Make Payment"
        )}
      </Button>
    </div>
  );
};

export default PaymentInfoComponent;
