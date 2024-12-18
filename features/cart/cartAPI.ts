import { cartAPIList } from "@/lib/apiList";
import instance from "@/lib/axios";
import { addToCartAPIPayload, deleteFromCartAPIPayload } from "@/types/api";
import { COOKIE_ACCESS_TOKEN } from "@/utils/constants";
import {
  getAuthHeader,
  handleCookie,
  handleErrorMessage,
} from "@/utils/helpers";

export const handleAddToCartAPI = async (
  payload: addToCartAPIPayload,
  loader?: (value: boolean) => void
) => {
  const token = handleCookie.get(COOKIE_ACCESS_TOKEN);
  payload.productId = payload.productId.map((item) => String(item));
  try {
    if (loader) loader(true);
    const { data }: any = await instance.post(
      cartAPIList.addToCart,
      payload,
      getAuthHeader({ token })
    );
    return data?.data;
  } catch (error) {
    console.log("Handle Add To Cart Error : ", error);
    handleErrorMessage(error);
  } finally {
    if (loader) loader(false);
  }
};

export const getCartListByUserId = async (id: string) => {
  const token = handleCookie.get(COOKIE_ACCESS_TOKEN);
  if (!token) return;
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
    payload.productId = String(payload.productId);
    const token = handleCookie.get(COOKIE_ACCESS_TOKEN);
    const { data }: any = await instance.delete(cartAPIList.addToCart, {
      data: payload,
      ...getAuthHeader({ token }),
    });
    return data?.data || { id: null };
  } catch (error) {
    console.log("Delete from product by id Error : ", error);
    handleErrorMessage(error);
  }
};

export const handleClearCart = async (id: string) => {
  try {
    const token = handleCookie.get(COOKIE_ACCESS_TOKEN);
    const { data }: any = await instance.get(
      cartAPIList.clearCart + "/" + id,
      getAuthHeader({ token })
    );
    return [];
  } catch (error) {
    console.log("Clear Cart API Error : ", error);
    handleErrorMessage(error);
  }
};
