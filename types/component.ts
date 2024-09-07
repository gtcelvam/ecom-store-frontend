import { ReactNode } from "react";
import { AuthenticationType, ProductCard } from "./constants";
import { FooterCompanyLink } from "@/utils/constants";

export interface MobileRightMenuComponentProps {
  handleOpenModel: () => void;
}

export interface HomeCarouselType {
  bannerList: string[];
}

export interface CustomDialogProps {
  title: string;
  description: string;
  buttonText: string;
  children: ReactNode;
  onSubmit: () => void;
  handleClose: () => void;
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

export interface ProductCardComponentProp {
  card: ProductCard;
  className?: string;
  classHead?: string;
  width?: number;
  height?: number;
}

export interface ProductCardListComponentProps {
  cardList: ProductCard[];
}
