"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { pageRoute } from "@/lib/apiList";
import { RootState } from "@/lib/store";
import CartItemComponent from "@/components/groups/cartItem";
import PaymentInfoComponent from "@/components/groups/paymentInfo";
import ShippingInformation from "@/components/groups/shippingInformation";
import { getCartListByUserIdThunk } from "@/features/cart/cartThunks";

const CartComponent = () => {
  //state values
  const {
    user: { isUserLoggedIn },
    cart: { products },
  } = useSelector((state: RootState) => state);

  //hooks
  const router = useRouter();

  //constants
  const isCartEmpty = !Boolean(products.length);

  useEffect(() => {
    if (!isUserLoggedIn) {
      router.push(pageRoute.home);
      return;
    }
  }, [isUserLoggedIn]);

  if (isCartEmpty)
    return <p className="text-center p-4">No Product Available in Cart</p>;
  return (
    <div className="grid grid-cols-[1fr] sm:grid-cols-[2fr,1fr] gap-4">
      {/* Order Details */}
      <div className="p-4">
        <h1 className="font-bold">Order Details</h1>
        {products.map((product) => (
          <CartItemComponent key={product.id} cartItem={product} />
        ))}
      </div>
      {/* Order Details Ends Here */}

      {/* Payment Details  */}
      <div className="p-4">
        <h1 className="font-bold">Payment Information</h1>
        <PaymentInfoComponent />
      </div>
      {/* Payment Details Ends Here */}

      {/* Payment Details  */}
      <div className="p-4">
        <p className="font-bold">Shipping Information</p>
        <ShippingInformation />
      </div>
      {/* Payment Details Ends Here */}
    </div>
  );
};

export default CartComponent;
