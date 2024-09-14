"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import AuthenticationComponent from "../groups/login";
import { LOGO_URL } from "@/utils/constants";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  HeaderProps,
  LoggedInRightSectionProps,
  MobileRightMenuComponentProps,
} from "@/types/component";
import { RootState } from "@/lib/store";
import {
  handleSetAuthOpen,
  handleUserLoginByToken,
} from "@/features/user/userSlice";

const Header: FC<HeaderProps> = (props) => {
  //props
  const { user = null } = props;

  //hooks
  const { isUserLoggedIn, userData, formType, isAuthOpen } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();

  //functions
  const handleOpenModel = () => dispatch(handleSetAuthOpen(true));
  const handleCloseModel = () => dispatch(handleSetAuthOpen(false));

  //useEffects
  useEffect(() => {
    if (user) dispatch(handleUserLoginByToken(user));
  }, [user, dispatch]);

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
      <RightSection
        isUserLoggedIn={isUserLoggedIn}
        userData={userData}
        handleOpenModel={handleOpenModel}
      />
      {/* Right Section Ends Here */}

      {/* Mobile Right Nav */}
      <MobileRightNavComponent
        isUserLoggedIn={isUserLoggedIn}
        userData={userData}
        handleOpenModel={handleOpenModel}
      />
      {/* Mobile Right Nav Ends Here */}

      {/* Models */}
      <AuthenticationComponent
        type={formType}
        open={isAuthOpen}
        handleClose={handleCloseModel}
      />
      {/* Models Ends Here */}
    </div>
  );
};

export default Header;

const RightSection: FC<LoggedInRightSectionProps> = (props) => {
  //props
  const { isUserLoggedIn, userData, handleOpenModel } = props;

  if (!Boolean(isUserLoggedIn && "name" in userData)) {
    return (
      <>
        <Button className="hidden sm:block" onClick={handleOpenModel}>
          LOGIN
        </Button>
      </>
    );
  }

  return (
    <div>
      <p>Welcome {userData.name}</p>
    </div>
  );
};

const MobileRightNavComponent: FC<MobileRightMenuComponentProps> = (props) => {
  //props
  const { isUserLoggedIn, userData, handleOpenModel } = props;

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
            {!isUserLoggedIn && (
              <Button className="block sm:hidden" onClick={handleOpenModel}>
                LOGIN
              </Button>
            )}
            {/* User Logged In */}
            {isUserLoggedIn && (
              <p className="text-shop-black font-medium text-center">
                Welcome {userData.name}
              </p>
            )}
            {/* User Logged In Ends Here */}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
