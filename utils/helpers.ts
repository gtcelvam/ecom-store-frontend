import { onChangeEvent } from "@/types/events";
import { CAROUSEL_IMAGE } from "./constants";

export const handleBannerList: () => Promise<string[]> = () => {
  return new Promise((res, rej) => {
    res(CAROUSEL_IMAGE);
  });
};

export const handleCookie = {
  set: (name: string, value: string) => {
    document.cookie = `${name}=${value}`;
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
};
