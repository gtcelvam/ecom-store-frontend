import { commonStyles, youngFashionList } from "@/utils/constants";
import React from "react";
import ProductCard from "../elements/productCard";

const YoungFavouriteComponent = () => {
  return (
    <div className={commonStyles.themePadding}>
      <h1 className="font-bold sm:text-[1.5rem]">YOUNG FASHION</h1>
      <div className="flex flex-col sm:flex-row items-center  sm:items-start justify-center sm:justify-evenly gap-5">
        {youngFashionList.map((item) => (
          <ProductCard
            key={item.id}
            className="sm:w-[400px]"
            classHead="sm:w-[400px]"
            width={400}
            card={item}
          />
        ))}
      </div>
    </div>
  );
};

export default YoungFavouriteComponent;
