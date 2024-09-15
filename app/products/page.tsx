import React from "react";
import SearchBar from "@/components/elements/searchBar";
import ProductCard from "@/components/elements/productCard";
import { showCaseList } from "@/utils/constants";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";

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
        {showCaseList.map((item) => (
          <ProductCard key={item.id} card={item} />
        ))}
      </div>
      {/* Main Section Ends Here */}
    </div>
  );
};

export default ProductsPage;
