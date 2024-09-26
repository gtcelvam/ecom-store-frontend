import { BACKEND_URL } from "@/utils/constants";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

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
    if (error.code === "ECONNABORTED" && error.message.includes("timeout")) {
      // Handle the timeout error here
      console.log("Request timed out.");
    }
    return Promise.reject(error);
  }
);

export default instance;
