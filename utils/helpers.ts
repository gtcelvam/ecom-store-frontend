import toast from "react-hot-toast";
import { AxiosError } from "axios";
import {
  ADDITIONAL_CHARGE,
  CAROUSEL_IMAGE,
  SampleProductList,
} from "./constants";
import { ProductCard } from "@/types/constants";
import store from "@/lib/store";
import moment from "moment";

export const loadScipt = (src: string) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(true);

    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
};

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
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * 7);
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
    return a + Number(b.variants[0].price) * Number(b.quantity || 1);
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

export const getCreateOrderPayload = (products: ProductCard[]) => {
  const userData = store.getState().user.userData;

  const lineItems = products.map((item) => {
    return {
      variant_id: item.variants[0].id,
      quantity: item.quantity || 1,
    };
  });
  const orderData = {
    line_items: lineItems,
    email: userData.email,
    customer: {
      id: userData.id, // Existing customer ID, or omit if adding new customer details
      email: userData.email,
      first_name: userData.name,
    },
    shipping_address: {
      first_name: userData.name,
      last_name: "test",
      address1: "123 Fake St",
      phone: "555-555-5555",
      city: "Fakecity",
      province: "ON",
      country: "CA",
      zip: "A1A1A1",
    },
    billing_address: {
      first_name: userData.name,
      last_name: "test",
      address1: "123 Fake St",
      phone: "555-555-5555",
      city: "Fakecity",
      province: "ON",
      country: "CA",
      zip: "A1A1A1",
    },
  };
  return orderData;
};

export const getUpdatedProductList = (
  productList: ProductCard[],
  data: { id: string }
) => {
  const { id } = data;
  const result = productList.filter((item) => {
    if (item.id != id) return item;
  });
  return result;
};

export const formatDate = (timestamp: string) => {
  return moment(timestamp).format("D MMM YYYY"); // e.g., "13 Oct 2024"
};
