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

export const getProductDetailsById = async (id: string) => {
  try {
    const url = `${productAPIList.getProducts}/${id}`;
    const { data } = await instance.get(url);
    return data?.data || null;
  } catch (error) {
    console.log("get product by id error : ", error);
    throw error;
  }
};
