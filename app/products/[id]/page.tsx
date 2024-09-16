import { Button } from "@/components/ui/button";
import { ProductDetailsPageProps } from "@/types/component";
import { RUPEES_SNIPPET } from "@/utils/constants";
import { getProductDetailsById } from "@/utils/helpers";
import Image from "next/image";
import React from "react";

const ProductDetails = async ({ params }: ProductDetailsPageProps) => {
  //props
  const { id } = params;

  //constants
  const data = await getProductDetailsById(parseInt(id));

  if (!Boolean(data)) return <>Something Went Wrong!!!</>;

  return (
    <div className="flex flex-col sm:flex-row justify-evenly items-center sm:items-start gap-10 p-6">
      {/* Left Side */}
      <div>
        <Image src={data.image} width={500} height={50} alt="Product-Image" />
      </div>
      {/* Left Side Ends Here */}
      {/* Right Side */}
      <div className="flex flex-col sm:justify-start items-center gap-4">
        <h1 className="text-[1rem] sm:text-[4rem] font-bold">{data.title}</h1>
        <div className="flex items-center justify-between">
          <p>
            PRICE :{" "}
            <span>
              {RUPEES_SNIPPET}
              {data.price}
            </span>
          </p>
        </div>
        <Button>ADD TO CART</Button>
      </div>
      {/* Right Side Ends Here */}
    </div>
  );
};

export default ProductDetails;
