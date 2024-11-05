import React, { FC } from "react";
import { CustomDropDownProps } from "@/types/component";

const CustomDropDown: FC<CustomDropDownProps> = (props) => {
  //props
  const { isOpen, list, onClick } = props;
  if (Boolean(!isOpen)) return "";
  return (
    <div className="flex items-center justify-center gap-4 w-full sm:w-[50%] border border-solid border-gray-200 rounded-lg pr-2 absolute top-[45px] bg-shop-white z-10 ">
      <ul className="w-full py-2 flex flex-col items-start justify-center">
        {list.map((item) => (
          <li
            key={item.id}
            className="w-full cursor-pointer m-0 px-2 py-2 hover:bg-shop-primary"
            onClick={() => onClick(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomDropDown;
