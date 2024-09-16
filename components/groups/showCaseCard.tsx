import { commonStyles, showCaseList } from "@/utils/constants";
import ProductCard from "../elements/productCard";

const ShowCardListComponent = () => {
  return (
    <div className={commonStyles.themePadding}>
      <h1 className="font-bold sm:text-[1.5rem]">NEW ARRIVALS</h1>
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-evenly gap-5">
        {showCaseList.map((item) => (
          <ProductCard key={item.id} classImage="h-[350px]" card={item} />
        ))}
      </div>
    </div>
  );
};

export default ShowCardListComponent;
