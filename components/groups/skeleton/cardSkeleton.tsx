import React, { FC } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonCardListProps } from "@/types/component";
import { getArrayByCount } from "@/utils/helpers";

const SkeletonCardList: FC<SkeletonCardListProps> = (props) => {
  //props
  const { count = 1 } = props;
  return (
    <div className="flex items-center justify-center sm:justify-between p-4 gap-5 flex-wrap">
      {getArrayByCount(count).map((item) => (
        <SkeletonCard key={item} />
      ))}
    </div>
  );
};

function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[150px] w-[250px] rounded-xl bg-slate-300" />
      <div className="space-y-2 h-[120px]">
        <Skeleton className="h-4 w-[250px] bg-slate-300" />
        <Skeleton className="h-4 w-[200px] bg-slate-300" />
      </div>
    </div>
  );
}

export default SkeletonCardList;
