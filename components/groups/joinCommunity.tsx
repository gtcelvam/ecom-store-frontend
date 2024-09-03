import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const JoinCommunityComponent = () => {
  return (
    <div className="w-full h-[300px] bg-shop-primary flex flex-col items-center justify-center gap-5 p-3 sm:p-0">
      <h1 className="text-center sm:text-[2rem] font-lg text-shop-white">
        JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
      </h1>
      <p className="text-xs sm:text-[1rem] font-medium text-shop-white">
        Type your email down below and be young wild generation
      </p>
      <div className="flex items-center justify-center gap-3">
        <Input type="email" placeholder="Please enter your email" />
        <Button>SEND</Button>
      </div>
    </div>
  );
};

export default JoinCommunityComponent;
