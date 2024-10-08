import { onChangeEvent } from "@/types/events";
import {
  ADDITIONAL_CHARGE,
  CAROUSEL_IMAGE,
  SampleProductList,
} from "./constants";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { ProductCard } from "@/types/constants";

export const getAuthHeader = (details: any) => {
  return {
    headers: {
      authorization: `Bearer ${details?.token}`,
      "Content-Type": "application/json",
    },
  };
};

export const handleBannerList: () => Promise<string[]> = () => {
  return new Promise((res, rej) => {
    res(CAROUSEL_IMAGE);
  });
};

export const getProductDetailsById: (
  id: string | number
) => Promise<(typeof SampleProductList)[0]> = (id) => {
  const productData = SampleProductList.filter((item) => item.id === id);
  return new Promise((res, rej) => {
    res(productData[0]);
  });
};

export const handleCookie = {
  set: (name: string, value: string) => {
    const date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path="/`;
  },
  get: (name: string) => {
    if (!name) return null;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
    for (var i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length + 1, cookie.length);
      }
    }
    return null;
  },
  clear: (name: string) => {
    if (!name) return;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  },
};

export const handleToaster = () => {
  return toast;
};

export const handleSuccessMessage = (message: string) => {
  handleToaster().success(message);
};

export const handleErrorMessage = (error: AxiosError | any) => {
  if (!error?.response) {
    handleToaster().error(error.message);
    return;
  }
  const message = error?.response?.data?.message || "Something Went Wrong!";
  handleToaster().error(message);
};

const reducerFuction = (accum: number, current: number) => accum + current;

export const handlePaymentSummary: (products: ProductCard[]) => {
  orderSummary: number;
  additionalCharges: number;
  totalAmount: number;
} = (products) => {
  const orderSummary = products.reduce((a, b) => {
    return a + Number(b.price);
  }, 0);
  const totalAmount = orderSummary + ADDITIONAL_CHARGE;
  return {
    orderSummary,
    additionalCharges: ADDITIONAL_CHARGE,
    totalAmount,
  };
};

export const getArrayByCount = (count: number) =>
  Array.from({ length: count }, (_, index) => index + 1);
