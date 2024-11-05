"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "@/components/elements/searchBar";
import { pageRoutes } from "@/utils/constants";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import ProductListCard from "@/components/elements/productListCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { getProductListThunk } from "@/features/product/productThunks";
import SkeletonCardList from "@/components/groups/skeleton/cardSkeleton";
import { onChangeEvent } from "@/types/events";
import { debounce } from "@/utils/helpers";
import { getProductByKeyword } from "@/features/product/productAPI";
import CustomDropDown from "@/components/elements/customDropdown";
import { useRouter } from "next/navigation";
import { pageRoute } from "@/lib/apiList";

const ProductsPage = () => {
  //state values
  const { isProductLoading, productList } = useSelector(
    (state: RootState) => state.product
  );
  const [searchList, setSearchList] = useState([]);

  //hooks
  const dispatch = useDispatch();
  const router = useRouter();

  //constants
  const commonStyles = {
    padding: "p-4",
  };

  //functions
  const handleSearch = async (e: onChangeEvent) => {
    const keyword = e.target.value || "";
    if (!Boolean(keyword)) return setSearchList([]);

    const result = await getProductByKeyword(keyword);
    setSearchList(result);
  };

  const handleSearchResultClick = (id: string | number) => {
    router.push(pageRoute.product + "/" + id);
  };

  useEffect(() => {
    dispatch<any>(getProductListThunk());
    () => {
      setSearchList([]);
    };
  }, []);

  if (isProductLoading) return <SkeletonCardList count={10} />;

  return (
    <div>
      {/* Top Section  */}
      <div
        className={`flex items-center justify-between ${commonStyles.padding} gap-4`}
      >
        <div>
          <h1>PRODUCTS</h1>
        </div>
        <div className="flex flex-col relative w-full sm:w-[50%] items-center justify-center">
          <SearchBar
            placeholder="Search For Product Here..."
            onChange={handleSearch}
          />
          {Boolean(searchList.length) && (
            <CustomDropDown
              isOpen={true}
              list={searchList}
              onClick={handleSearchResultClick}
            />
          )}
        </div>
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
