import { onChangeEvent } from "@/types/events";
import { CAROUSEL_IMAGE, SampleProductList } from "./constants";
import toast from "react-hot-toast";

export const getAuthHeader = (details: any) => {
  return { authorization: `Bearer ${details?.token}` };
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
