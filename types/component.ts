import { ReactNode } from "react";
import { AuthenticationType, ProductCard, userDataType } from "./constants";
import { FooterCompanyLink, SampleProductList } from "@/utils/constants";
import { onChangeEvent } from "./events";
import { InputProps } from "@/components/ui/input";
import { ImageProps } from "next/image";

export interface HeaderProps {
  user: userDataType;
}

export interface LoggedInRightSectionProps {
  userData: userDataType;
  isUserLoggedIn: boolean;
  handleOpenModel: () => void;
  handleLogout: () => void;
}

export interface MobileRightMenuComponentProps
  extends LoggedInRightSectionProps {}

export interface HomeCarouselType {
  bannerList: string[];
}

export interface CustomDialogProps {
  title: string;
  description: string;
  buttonText: string | ReactNode;
  children: ReactNode;
  onSubmit: (data?: any) => void;
  handleClose: () => void;
}

export interface CustomSearchBarProps extends InputProps {
  [key: string]: any;
}

export interface CustomDropDownProps {
  isOpen: boolean;
  list: { title: string; id: string | number }[];
  onClick: (id: string | number) => void;
}

export interface SocialIconProps {
  icon: ReactNode;
}

export interface FooterLinkComponentProps {
  title: string;
  list: typeof FooterCompanyLink;
}

export interface AuthenticationComponentProps {
  open: boolean;
  handleClose: () => void;
  type: AuthenticationType;
}

export interface SignInComponentProps<T> {
  handleSwitchAuth: (type: AuthenticationType) => void;
  formData: T;
  handleFormChange: (e: onChangeEvent) => void;
}

export interface ProductCardComponentProp {
  card: ProductCard;
  className?: string;
  classHead?: string;
  classImage?: string;
  width?: number;
  height?: number;
  href?: string;
}

export interface ProductListCardComponentProps
  extends ProductCardComponentProp {}

export interface ProductCardListComponentProps {
  cardList: ProductCard[];
}

export interface ProductDetailsPageProps {
  params: {
    id: string;
  };
}

export interface ProductDetailsByIdProps {
  product: ProductCard;
}

export interface CartItemComponentProps {
  cartItem: ProductCard;
  userId: string | number;
}

export interface LoaderComponentProps extends ImageProps {
  containerClass: string;
  loadingTxt?: string;
}

export interface SkeletonCardListProps {
  count: number;
}
