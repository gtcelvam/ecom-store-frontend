"use client";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductListCardComponentProps } from "@/types/component";
import {
  CheckIcon,
  EyeOpenIcon,
  HeartFilledIcon,
  HeartIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { pageRoutes, RUPEES_SNIPPET } from "@/utils/constants";
import { RootState } from "@/lib/store";
import { handleToaster } from "@/utils/helpers";
import { handleAddToCartAction } from "@/features/cart/cartSlice";

const ProductListCard: FC<ProductListCardComponentProps> = (props) => {
  //props
  const {
    card,
    className = "",
    classHead = "",
    classImage = "",
    width = 300,
    height = 150,
    href = pageRoutes.products,
  } = props;

  //state values
  const {
    user: { isUserLoggedIn },
    cart: { products },
  } = useSelector((state: RootState) => state);

  //hooks
  const dispatch = useDispatch();

  //constants
  const isLiked = false;
  const isAddedInCart = products.some((item) => item.id === card.id);

  //functions
  const handleAddToCart = () => {
    if (!isUserLoggedIn) {
      handleToaster().success(
        "You're not logged in.Please log in to proceed further"
      );
      return;
    }
    dispatch(handleAddToCartAction(card));
  };

  return (
    <Card className={`w-70 sm:w-[300px] sm:p-0 sm:rounded-lg ${className}`}>
      <CardHeader className={`relative sm:w-[300px] p-0 ${classHead}`}>
        <Image
          className={classImage + " sm:rounded-t-lg"}
          width={width}
          height={height}
          src={card?.image?.src}
          alt="show-case-card"
        />
        {Boolean(!isLiked) && (
          <HeartIcon
            className="absolute top-0 left-3 text-shop-primary"
            width={25}
            height={25}
          />
        )}
        {Boolean(isLiked) && (
          <HeartFilledIcon
            className="absolute top-0 left-3 text-shop-primary"
            width={25}
            height={25}
          />
        )}
        <CardTitle className="sm:w-[300px] px-2 mt-5">{card.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between px-2 mt-2">
        <CardDescription>
          {RUPEES_SNIPPET}
          {card.variants[0]?.price}
        </CardDescription>
        <div className="flex items-center gap-5">
          <Link href={href}>
            <EyeOpenIcon className="font-bold" width={18} height={18} />
          </Link>
          {!Boolean(isAddedInCart) && (
            <PlusIcon
              className="font-bold"
              width={18}
              height={18}
              onClick={handleAddToCart}
            />
          )}
          {Boolean(isAddedInCart) && (
            <CheckIcon
              className="font-bold text-shop-primary"
              width={18}
              height={18}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductListCard;
