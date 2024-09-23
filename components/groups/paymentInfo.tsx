import { RootState } from "@/lib/store";
import { RUPEES_SNIPPET } from "@/utils/constants";
import { handlePaymentSummary } from "@/utils/helpers";
import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";

const PaymentInfoComponent = () => {
  //state values
  const { products } = useSelector((state: RootState) => state.cart);

  //constants
  const { orderSummary, additionalCharges, totalAmount } =
    handlePaymentSummary(products);
  const commonStyles = "flex items-center justify-between m-8";

  return (
    <div>
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
      <Button>Make Payment</Button>
    </div>
  );
};

export default PaymentInfoComponent;
