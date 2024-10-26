import React from "react";
import CustomDialog from "../elements/CustomDialog";
import ConfettiRain from "./confetti";
import Image from "next/image";
import { PAYMENT_SUCCESS_URL } from "@/utils/constants";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { handleSuccessModel } from "@/features/cart/cartSlice";
import { RootState } from "@/lib/store";

const PaymentSuccessModel = () => {
  //state values
  const { isSuccessModelOpen } = useSelector((state: RootState) => state.cart);

  //hooks
  const dispatch = useDispatch();

  //function
  const handleSuccessModelClose = () => dispatch(handleSuccessModel(false));

  if (!isSuccessModelOpen) return "";

  return (
    <>
      <div className="absolute z-50 top-[30%] left-[50%] translate-x-[-50%] transate-y-[-50%] rounded bg-slate-50">
        <div className="w-[500px] h-[300px] flex flex-col items-center justify-center gap-5">
          <Image
            src={PAYMENT_SUCCESS_URL}
            width={150}
            height={100}
            alt="success"
          />
          <h1 className="text-lg font-bold">PAYMENT SUCCESSFULL!!!</h1>
          <Button onClick={handleSuccessModelClose}>OK</Button>
        </div>
      </div>
      <ConfettiRain />
    </>
  );
};

export default PaymentSuccessModel;
