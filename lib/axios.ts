import { BACKEND_URL } from "@/utils/constants";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import store from "./store";
import { handleUserLogout } from "@/features/user/userSlice";

const instance: AxiosInstance = axios.create({
  baseURL: BACKEND_URL.dev,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (res: AxiosResponse) => res,
  (error: AxiosError) => {
    if (axios.isCancel(error)) {
      console.log("Cancel Error : ", error);
    }
    if (error.response?.status === 401) store.dispatch(handleUserLogout());
    if (error.code === "ECONNABORTED" && error.message.includes("timeout")) {
      // Handle the timeout error here
      console.log("Request timed out.");
    }
    return Promise.reject(error);
  }
);

export default instance;
