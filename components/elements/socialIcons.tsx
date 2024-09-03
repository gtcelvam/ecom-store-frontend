import { SocialIconProps } from "@/types/component";
import React, { FC } from "react";

const SocialIcon: FC<SocialIconProps> = (props) => {
  //props
  const { icon } = props;

  return (
    <div className="flex items-center justify-center w-[30px] h-[30px] rounded bg-shop-primary cursor-pointer">
      {icon}
    </div>
  );
};

export default SocialIcon;
