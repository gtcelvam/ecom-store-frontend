import React from "react";
import SearchBar from "@/components/elements/searchBar";
import { pageRoutes, SampleProductList } from "@/utils/constants";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import ProductListCard from "@/components/elements/productListCard";

const ProductsPage = () => {
  //constants
  const commonStyles = {
    padding: "p-4",
  };
  return (
    <div>
      {/* Top Section  */}
      <div
        className={`flex items-center justify-between ${commonStyles.padding}`}
      >
        <div>
          <h1>PRODUCTS</h1>
        </div>
        <SearchBar placeholder="Search For Product Here..." />
        <div>
          <MixerHorizontalIcon width={20} height={20} />
        </div>
      </div>
      {/* Top Section Here */}

      {/* Main Section */}
      <div
        className={`flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-evenly gap-5 ${commonStyles.padding}`}
      >
        {SampleProductList.map((item) => (
          <ProductListCard
            key={item.id}
            classImage="h-[350px]"
            card={item}
            href={`${pageRoutes.products}/${item.id}`}
          />
        ))}
      </div>
      {/* Main Section Ends Here */}
    </div>
  );
};

export default ProductsPage;
