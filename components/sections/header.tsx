"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import AuthenticationComponent from "../groups/login";
import { LOGO_URL } from "@/utils/constants";
import { AuthenticationType } from "@/types/constants";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { MobileRightMenuComponentProps } from "@/types/component";

const Header = () => {
  //state values
  const [open, setOpen] = useState(false);

  //functions
  const handleOpenModel = () => setOpen(true);
  const handleCloseModel = () => setOpen(false);

  return (
    <div className="flex items-center justify-between bg-shop-white h-[50px] px-2">
      <Image width={80} height={70} src={LOGO_URL} alt="logo" />

      {/* Menus */}
      <div className="flex items-center justify-center gap-10 hidden sm:flex">
        <p className="text-shop-black font-medium	cursor-pointer">CATALOGUE</p>
        <p className="text-shop-black font-medium	cursor-pointer">FASHION</p>
        <p className="text-shop-black font-medium	cursor-pointer">FAVOURITE</p>
        <p className="text-shop-black font-medium	cursor-pointer">LIFESTYLE</p>
      </div>
      {/* Menus Ends Here */}

      {/* Right Section */}
      <Button className="hidden sm:block" onClick={handleOpenModel}>
        LOGIN
      </Button>
      {/* Right Section Ends Here */}

      {/* Mobile Right Nav */}
      <MobileRightNavComponent handleOpenModel={handleOpenModel} />
      {/* Mobile Right Nav Ends Here */}

      {/* Models */}
      <AuthenticationComponent
        type={AuthenticationType.login}
        open={open}
        handleClose={handleCloseModel}
      />
      {/* Models Ends Here */}
    </div>
  );
};

export default Header;

const MobileRightNavComponent: FC<MobileRightMenuComponentProps> = (props) => {
  //props
  const { handleOpenModel } = props;

  //state values
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  //functions
  const handleSideBarOpen = () => {
    setIsSideBarOpen(true);
  };

  const handleSideBarClose = () => {
    setIsSideBarOpen(false);
  };

  return (
    <div className="block sm:hidden">
      <HamburgerMenuIcon
        className="sm:hidden cursor-pointer"
        width={30}
        height={25}
        onClick={handleSideBarOpen}
      />
      <Sheet open={isSideBarOpen} onOpenChange={handleSideBarClose}>
        <SheetContent className="sm:hidden">
          <SheetHeader>
            <SheetTitle>MENU</SheetTitle>
          </SheetHeader>
          {/* Menus */}
          <div className="flex flex-col items-center justify-center gap-10 my-4 sm:hidden">
            <p className="text-shop-black font-medium	cursor-pointer">
              CATALOGUE
            </p>
            <p className="text-shop-black font-medium	cursor-pointer">FASHION</p>
            <p className="text-shop-black font-medium	cursor-pointer">
              FAVOURITE
            </p>
            <p className="text-shop-black font-medium	cursor-pointer">
              LIFESTYLE
            </p>
          </div>
          {/* Menus Ends Here */}
          <SheetFooter>
            <Button className="block sm:hidden" onClick={handleOpenModel}>
              LOGIN
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
