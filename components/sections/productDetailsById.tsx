"use client";
import React, { FC } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { RootState } from "@/lib/store";
import { ProductDetailsByIdProps } from "@/types/component";
import { RUPEES_SNIPPET } from "@/utils/constants";
import { handleToaster } from "@/utils/helpers";
import { handleAddToCartThunk } from "@/features/cart/cartThunks";
import { addToCartAPIPayload } from "@/types/api";

const ProductDetailsById: FC<ProductDetailsByIdProps> = (params) => {
  //props
  const { product } = params;

  //state values
  const {
    user: { isUserLoggedIn, userData },
    cart: { products },
  } = useSelector((state: RootState) => state);

  //hooks
  const dispatch = useDispatch();

  //constants
  const isAddedInCart = products.some((item) => item.id === product.id);
  const buttonText = isAddedInCart ? "ADDED" : "ADD TO CART";
  const buttonStyle = isAddedInCart ? "bg-shop-primary text-shop-white" : "";

  //functions
  const handleAddToCart = () => {
    if (!isUserLoggedIn) {
      handleToaster().success(
        "You're not logged in.Please log in to proceed further"
      );
      return;
    }
    const payload: addToCartAPIPayload = {
      userId: userData?.id,
      productId: [product?.id],
    };
    dispatch<any>(handleAddToCartThunk({ payload }));
  };

  return (
    <div className="flex flex-col sm:flex-row justify-evenly items-center sm:items-start gap-10 p-6">
      {/* Left Side */}
      <div>
        <Image
          src={product.image}
          width={500}
          height={50}
          alt="Product-Image"
        />
      </div>
      {/* Left Side Ends Here */}
      {/* Right Side */}
      <div className="flex flex-col sm:justify-start items-center gap-4">
        <h1 className="text-[1rem] sm:text-[4rem] font-bold">
          {product.title}
        </h1>
        <div className="flex items-center justify-between">
          <p>
            PRICE :{" "}
            <span>
              {RUPEES_SNIPPET}
              {product.price}
            </span>
          </p>
        </div>
        <Button className={buttonStyle} onClick={handleAddToCart}>
          {buttonText}
        </Button>
      </div>
      {/* Right Side Ends Here */}
    </div>
  );
};

export default ProductDetailsById;
