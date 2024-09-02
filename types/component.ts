import { ReactNode } from "react";
import { AuthenticationType, ShowCardType } from "./constants";

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

export interface AuthenticationComponentProps {
  open: boolean;
  handleClose: () => void;
  type: AuthenticationType;
}

export interface ShowCardComponentProp {
  showCaseCard: ShowCardType;
}

export interface ShowCardListComponentProps {
  showCaseList: ShowCardType[];
}
