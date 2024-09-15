import React, { FC } from "react";
import { Input } from "../ui/input";
import { CustomSearchBarProps, SocialIconProps } from "@/types/component";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SearchBar: FC<CustomSearchBarProps> = (props) => {
  //props
  const {
    type = "text",
    placeholder = "Search Here...",
    className = "w-full border-none",
    ...rest
  } = props;

  return (
    <div className="flex items-center justify-center gap-4 w-[50%] border border-solid border-gray-200 rounded-lg pr-2">
      <Input
        className={className}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      <MagnifyingGlassIcon className="cursor-pointer" width={20} height={20} />
    </div>
  );
};

export default SearchBar;
