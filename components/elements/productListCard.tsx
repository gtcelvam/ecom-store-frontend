"use client";
import { FC, useState } from "react";
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
import { LOADERS, pageRoutes, RUPEES_SNIPPET } from "@/utils/constants";
import { RootState } from "@/lib/store";
import { handleToaster } from "@/utils/helpers";
import {
  handleAddToCartThunk,
  handleDeleteProductByIdThunk,
} from "@/features/cart/cartThunks";
import { addToCartAPIPayload, deleteFromCartAPIPayload } from "@/types/api";
import { Loader } from "./Loader";

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
    user: { isUserLoggedIn, userData },
    cart: { products },
  } = useSelector((state: RootState) => state);
  const [isAddCartLoading, setIsAddCartLoading] = useState(false);

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
    const payload: addToCartAPIPayload = {
      userId: userData?.id,
      productId: [card?.id],
    };
    dispatch<any>(handleAddToCartThunk({ payload, loader: handleLoader }));
  };

  const handleDeleteProduct = () => {
    const paylaod: deleteFromCartAPIPayload = {
      userId: userData.id,
      productId: card.id,
    };
    dispatch<any>(handleDeleteProductByIdThunk(paylaod));
  };

  const handleLoader = (value: boolean) => setIsAddCartLoading(value);

  return (
    <Card className={`w-70 sm:w-[300px] sm:p-0 sm:rounded-lg ${className}`}>
      <CardHeader className={`relative sm:w-[300px] p-0 ${classHead}`}>
        <Link href={href}>
          <Image
            className={classImage + " sm:rounded-t-lg"}
            width={width}
            height={height}
            src={card?.image?.src}
            alt="show-case-card"
          />
        </Link>
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
          {Boolean(isAddCartLoading) && (
            <Loader {...LOADERS.tubeThemeLoader} loadingTxt="" />
          )}
          {!Boolean(isAddedInCart) && !isAddCartLoading && (
            <PlusIcon
              className="font-bold cursor-pointer"
              width={18}
              height={18}
              onClick={handleAddToCart}
            />
          )}
          {Boolean(isAddedInCart) && !isAddCartLoading && (
            <CheckIcon
              className="font-bold text-shop-primary cursor-pointer"
              width={18}
              height={18}
              onClick={handleDeleteProduct}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductListCard;
