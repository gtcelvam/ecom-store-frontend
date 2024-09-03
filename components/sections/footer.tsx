import {
  FooterCompanyLink,
  FooterLegalLink,
  FooterQuickLink,
  LOGO_URL,
} from "@/utils/constants";
import Image from "next/image";
import React, { FC } from "react";
import SocialIcon from "../elements/socialIcons";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { ArrowBigDownIcon } from "lucide-react";
import { FooterLinkComponentProps } from "@/types/component";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full sm:h-[300px] flex flex-col-reverse gap-3 sm:gap-0 sm:flex-row items-start p-4 sm:p-10 bg-shop-black">
      {/* Left Section */}
      <div className="flex flex-col justify-start items-center sm:items-start sm:justify-start  gap-4 sm:flex-1">
        <Image width={80} height={70} src={LOGO_URL} alt="logo" />
        <p className="text-shop-white font-medium text-center sm:text-left">
          Complete your style with awesome clothes from us.
        </p>
        <div className="flex items-center justify-between sm:justify-start gap-5">
          <SocialIcon icon={<InstagramLogoIcon width={30} height={20} />} />
          <SocialIcon icon={<LinkedInLogoIcon width={30} height={20} />} />
          <SocialIcon icon={<TwitterLogoIcon width={30} height={20} />} />
          <SocialIcon icon={<ArrowBigDownIcon width={30} height={20} />} />
        </div>
      </div>
      {/* Left Section Ends Here */}
      {/* Right Section */}
      <div className="w-full sm:w-auto flex sm:flex-1 items-start justify-evenly">
        <FooterLinkComponent title="Company" list={FooterCompanyLink} />
        <FooterLinkComponent title="Quick Link" list={FooterQuickLink} />
        <FooterLinkComponent title="Legal" list={FooterLegalLink} />
      </div>
      {/* Right Section Ends Here */}
    </div>
  );
};

export default Footer;

const FooterLinkComponent: FC<FooterLinkComponentProps> = (props) => {
  //props
  const { title, list } = props;
  return (
    <div className="flex flex-col items-center justify-start gap-5">
      <h1 className="text-shop-white">{title}</h1>
      {list.map((item) => (
        <Link key={item.id} href={item.link}>
          <p className="text-sm sm:text-normal text-shop-bg">{item.name}</p>
        </Link>
      ))}
    </div>
  );
};
