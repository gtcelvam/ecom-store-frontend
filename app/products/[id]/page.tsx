import ProductDetailsById from "@/components/sections/productDetailsById";
import { ProductDetailsPageProps } from "@/types/component";
import { getProductDetailsById } from "@/utils/helpers";

const ProductDetails = async ({ params }: ProductDetailsPageProps) => {
  //props
  const { id } = params;

  //constants
  const data = await getProductDetailsById(parseInt(id));

  if (!Boolean(data)) return <>Something Went Wrong!!!</>;

  return <ProductDetailsById product={data} />;
};

export default ProductDetails;
