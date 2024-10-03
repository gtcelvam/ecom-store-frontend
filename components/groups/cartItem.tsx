import { CartItemComponentProps } from "@/types/component";
import Image from "next/image";
import React, { FC } from "react";
import { Input } from "../ui/input";
import { commonIcons, LOADERS } from "@/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteProductByIdThunk } from "@/features/cart/cartThunks";
import { deleteFromCartAPIPayload } from "@/types/api";
import { RootState } from "@/lib/store";

const CartItemComponent: FC<CartItemComponentProps> = (props) => {
  //props
  const {
    cartItem: { id, image, title, variants },
    userId,
  } = props;

  //state values
  const { isCartLoading } = useSelector((state: RootState) => state.cart);

  //hooks
  const dispatch = useDispatch();

  //constants
  const deleteIcon = isCartLoading
    ? LOADERS.tubeThemeLoader
    : commonIcons.deleteIcon;

  //functions
  const handleDeleteProduct = () => {
    const paylaod: deleteFromCartAPIPayload = {
      userId,
      productId: id,
    };
    dispatch<any>(handleDeleteProductByIdThunk(paylaod));
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 border-b-[1px] border-gray-300">
      <Image
        className="w-[30px] sm:w-auto sm:h-auto"
        width={60}
        height={30}
        src={image.src}
        alt="cart-item"
      />
      <h1>{title}</h1>
      <p>{variants[0].price}</p>
      <div className="flex items-center gap-4">
        <p>Quantity : </p>
        <Input className="w-12 px-2" type="number" defaultValue={0} min={0} />
      </div>
      <h1 className="font-bold">L</h1>
      <div>
        <Image
          className="cursor-pointer"
          width={30}
          height={30}
          src={deleteIcon}
          onClick={handleDeleteProduct}
          alt="delete-icon"
        />
      </div>
    </div>
  );
};

export default CartItemComponent;
