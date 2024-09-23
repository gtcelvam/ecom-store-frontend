import { CartItemComponentProps } from "@/types/component";
import Image from "next/image";
import React, { FC } from "react";

const CartItemComponent: FC<CartItemComponentProps> = (props) => {
  //props
  const {
    cartItem: { image, title, price },
  } = props;

  return (
    <div className="flex items-center justify-between px-4 py-2 border-b-[1px] border-gray-300">
      <Image width={60} height={30} src={image} alt="cart-item" />
      <h1>{title}</h1>
      <p>{price}</p>
    </div>
  );
};

export default CartItemComponent;
