"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
import { commonIcons, LOGO_URL, pageRoutes } from "@/utils/constants";
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
  handleUserLogout,
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
  const handleLogout = () => dispatch(handleUserLogout());

  //useEffects
  useEffect(() => {
    if (user) dispatch(handleUserLoginByToken(user));
  }, [user, dispatch]);

  return (
    <div className="flex items-center justify-between bg-shop-white h-[50px] px-2">
      <Link href={pageRoutes.home}>
        <Image width={80} height={70} src={LOGO_URL} alt="logo" />
      </Link>

      {/* Menus */}
      <div className="items-center justify-center gap-10 hidden sm:flex">
        <Link href={pageRoutes.products}>
          <p className="text-shop-black font-medium	cursor-pointer">CATALOGUE</p>
        </Link>
        <Link href={pageRoutes.products}>
          <p className="text-shop-black font-medium	cursor-pointer">FASHION</p>
        </Link>
        <Link href={pageRoutes.products}>
          <p className="text-shop-black font-medium	cursor-pointer">FAVOURITE</p>
        </Link>
        <Link href={pageRoutes.products}>
          <p className="text-shop-black font-medium	cursor-pointer">LIFESTYLE</p>
        </Link>
      </div>
      {/* Menus Ends Here */}

      {/* Right Section */}
      <RightSection
        isUserLoggedIn={isUserLoggedIn}
        userData={userData}
        handleOpenModel={handleOpenModel}
        handleLogout={handleLogout}
      />
      {/* Right Section Ends Here */}

      {/* Mobile Right Nav */}
      <MobileRightNavComponent
        isUserLoggedIn={isUserLoggedIn}
        userData={userData}
        handleOpenModel={handleOpenModel}
        handleLogout={handleLogout}
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
  const {
    isUserLoggedIn,
    userData = { name: "" },
    handleOpenModel,
    handleLogout,
  } = props;

  //state values
  const { products } = useSelector((state: RootState) => state.cart);

  //constants
  const productOnCart = products.length;

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
    <div className="flex items-center gap-4">
      <p>Welcome {userData.name}</p>
      <div className="relative">
        <Image
          width={20}
          height={20}
          src={commonIcons.cartIcon}
          alt="cart-icon"
        />
        <p className="cart-bag-image">{productOnCart}</p>
      </div>
      <Button className="hidden sm:block" onClick={handleLogout}>
        LOG OUT
      </Button>
    </div>
  );
};

const MobileRightNavComponent: FC<MobileRightMenuComponentProps> = (props) => {
  //props
  const {
    isUserLoggedIn,
    userData = { name: "" },
    handleOpenModel,
    handleLogout,
  } = props;

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
            <Link href={pageRoutes.products}>
              <p className="text-shop-black font-medium	cursor-pointer">
                CATALOGUE
              </p>
            </Link>
            <Link href={pageRoutes.products}>
              <p className="text-shop-black font-medium	cursor-pointer">
                FASHION
              </p>
            </Link>
            <Link href={pageRoutes.products}>
              <p className="text-shop-black font-medium	cursor-pointer">
                FAVOURITE
              </p>
            </Link>
            <Link href={pageRoutes.products}>
              <p className="text-shop-black font-medium	cursor-pointer">
                LIFESTYLE
              </p>
            </Link>
          </div>
          {/* Menus Ends Here */}
          <SheetFooter className="flex-col gap-3">
            {!isUserLoggedIn && (
              <Button className="block sm:hidden" onClick={handleOpenModel}>
                LOGIN
              </Button>
            )}
            {/* User Logged In */}
            {isUserLoggedIn && (
              <>
                <p className="text-shop-black font-medium text-center">
                  Welcome {userData.name}
                </p>
                <Button className="block sm:hidden" onClick={handleLogout}>
                  LOG OUT
                </Button>
              </>
            )}
            {/* User Logged In Ends Here */}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
