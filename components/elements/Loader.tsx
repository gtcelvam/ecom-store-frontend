import { FC } from "react";
import Image from "next/image";
import { LoaderComponentProps } from "@/types/component";

export const Loader: FC<LoaderComponentProps> = (props) => {
  //props
  const {
    containerClass,
    loadingTxt = "Loading...",
    width = 20,
    height = 20,
    ...rest
  } = props;
  return (
    <div className="flex items-center gap-1">
      <Image
        className="w-[25px] h-[25px]"
        width={width}
        height={height}
        {...rest}
        alt="image-loader"
      />
      <h1>{loadingTxt}</h1>
    </div>
  );
};
