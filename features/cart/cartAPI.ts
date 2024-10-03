import { cartAPIList } from "@/lib/apiList";
import instance from "@/lib/axios";
import { addToCartAPIPayload, deleteFromCartAPIPayload } from "@/types/api";
import { COOKIE_ACCESS_TOKEN } from "@/utils/constants";
import {
  getAuthHeader,
  handleCookie,
  handleErrorMessage,
} from "@/utils/helpers";

export const handleAddToCartAPI = async (payload: addToCartAPIPayload) => {
  const token = handleCookie.get(COOKIE_ACCESS_TOKEN);
  try {
    const { data }: any = await instance.post(
      cartAPIList.addToCart,
      payload,
      getAuthHeader({ token })
    );
    return data?.data;
  } catch (error) {
    console.log("Handle Add To Cart Error : ", error);
    handleErrorMessage(error);
  }
};

export const getCartListByUserId = async (id: string) => {
  const token = handleCookie.get(COOKIE_ACCESS_TOKEN);
  try {
    const url = `${cartAPIList.addToCart}/${id}`;
    const { data }: any = await instance.get(url, getAuthHeader({ token }));
    return data?.data;
  } catch (error) {
    console.log("Get Cart List Error : ", error);
    handleErrorMessage(error);
  }
};

export const handleDeleteProductById = async (
  payload: deleteFromCartAPIPayload
) => {
  try {
    const token = handleCookie.get(COOKIE_ACCESS_TOKEN);
    const { data }: any = await instance.delete(cartAPIList.addToCart, {
      data: payload,
      ...getAuthHeader({ token }),
    });
    return data?.data;
  } catch (error) {
    console.log("Delete from product by id Error : ", error);
    handleErrorMessage(error);
  }
};
