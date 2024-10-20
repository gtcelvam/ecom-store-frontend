import { orderRoute } from "@/lib/apiList";
import instance from "@/lib/axios";
import { COOKIE_ACCESS_TOKEN } from "@/utils/constants";
import {
  getAuthHeader,
  handleCookie,
  handleErrorMessage,
} from "@/utils/helpers";

export const handleCreateOrder = async (payload: unknown) => {
  const token = handleCookie.get(COOKIE_ACCESS_TOKEN);
  try {
    const { data }: any = await instance.post(
      orderRoute.order,
      payload,
      getAuthHeader({ token })
    );
    return data?.data;
  } catch (error) {
    console.log("Create Order API Error : ", error);
    handleErrorMessage(error);
  }
};
