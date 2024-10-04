import ProductDetailsById from "@/components/sections/productDetailsById";
import { getProductDetailsById } from "@/features/product/productAPI";
import { ProductDetailsPageProps } from "@/types/component";

const ProductDetails = async ({ params }: ProductDetailsPageProps) => {
  //props
  const { id } = params;

  //constants
  const data = await getProductDetailsById(id);

  if (!Boolean(data)) return <>Something Went Wrong!!!</>;

  return <ProductDetailsById product={data} />;
};

export default ProductDetails;
