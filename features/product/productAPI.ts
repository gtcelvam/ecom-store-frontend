import { productAPIList } from "@/lib/apiList";
import instance from "@/lib/axios";

export const getProductsByPage = async () => {
  try {
    const { data } = await instance.get(productAPIList.getProducts);
    return data?.data || [];
  } catch (error) {
    console.log("get product by page error : ", error);
    throw error;
  }
};
