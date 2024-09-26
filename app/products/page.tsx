"use client";
import React, { useEffect } from "react";
import SearchBar from "@/components/elements/searchBar";
import { pageRoutes, SampleProductList } from "@/utils/constants";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import ProductListCard from "@/components/elements/productListCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { getProductListThunk } from "@/features/product/productThunks";

const ProductsPage = () => {
  //state values
  const { productList } = useSelector((state: RootState) => state.product);

  //hooks
  const dispatch = useDispatch();

  //constants
  const commonStyles = {
    padding: "p-4",
  };

  useEffect(() => {
    dispatch<any>(getProductListThunk());
  }, []);

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
        className={`flex flex-col flex-wrap sm:flex-row items-center sm:items-start justify-center sm:justify-evenly gap-5 ${commonStyles.padding}`}
      >
        {productList.map((item: any) => (
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
