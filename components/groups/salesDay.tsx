import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { SALES_DAY_IMAGE } from "@/utils/constants";

const SalesDayComponent = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center w-full h-auto sm:h-[500px] bg-shop-primary p-2 sm:p-0">
      <div className="flex-1 h-full flex items-center justify-center">
        <Image
          width={300}
          height={100}
          src={SALES_DAY_IMAGE}
          alt="sales-day-image"
        />
      </div>
      <div className="flex-1 h-full flex flex-col items-center justify-center gap-3">
        <h1 className="font-bold text-[2rem] sm;text-[4rem]">PAY DAY</h1>
        <h1 className="font-bold text-[2rem] sm:text-[4rem]">SALE NOW</h1>
        <p className="text-center sm:text-start">
          Spend minimal $100 get 30% off voucher code for your next purchase
        </p>
        <p>
          <span className="font-bold">1 June - 10 June 2021</span>
          <br />
          *Terms & Conditions apply
        </p>
        <Button>SHOP NOW</Button>
      </div>
    </div>
  );
};

export default SalesDayComponent;
