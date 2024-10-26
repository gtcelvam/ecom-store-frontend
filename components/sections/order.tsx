"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { getOrderDetailsByEmailThunk } from "@/features/order/orderThunks";
import { useRouter } from "next/navigation";
import OrderAccordion from "../groups/orderAccordion";

const OrdersComponent = () => {
  //state values
  const {
    order: { orderDetails },
    user: { isUserLoggedIn },
  } = useSelector((state: RootState) => state);

  //hooks
  const dispatch = useDispatch();
  const router = useRouter();

  //use effects
  useEffect(() => {
    if (!isUserLoggedIn) router.push("/");
    dispatch<any>(getOrderDetailsByEmailThunk());
  }, []);

  if (!Boolean(orderDetails.length))
    return (
      <div className="flex items-center justify-center">
        <p>No Orders Found!</p>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full p-5">
      <h1 className="text-lg font-bold">ORDER DETAILS</h1>
      {orderDetails.map((item) => (
        <OrderAccordion key={item.id} orderDetail={item} />
      ))}
    </div>
  );
};

export default OrdersComponent;
