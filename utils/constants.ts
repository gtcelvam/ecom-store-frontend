import { ProductCard } from "@/types/constants";
import SALES_DAY_PIC from "@/public/images/salesDay.webp";

//Snippets
export const SNIPPET_COMMA = "&apos;";

//configs
export const BACKEND_URL = {
  prod: process.env.NEXT_PUBLIC_BACKEND_URL,
  dev: process.env.NEXT_PUBLIC_BACKEND_URL_LOCAL,
};

export const COOKIE_ACCESS_TOKEN = "access-token";

export const LOGO_URL =
  "https://img.freepik.com/premium-vector/ts-logo-design-vector-illustration_742779-2098.jpg";

export const CAROUSEL_IMAGE = [
  "https://static.vecteezy.com/system/resources/previews/011/871/820/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
  "https://images.template.net/65588/Mobile-Shopping-Billboard-Template.jpeg",
  "https://static.vecteezy.com/system/resources/previews/004/707/493/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
];

export const commonStyles = {
  themeBtn: "bg-shop-primary text-shop-white",
  themePadding: "p-2",
};

export const showCaseList: ProductCard[] = [
  {
    id: 1,
    title: "Hoodies & Sweetshirt",
    image:
      "https://i5.walmartimages.com/asr/40c65bfe-c0d9-4f34-8246-750c91561e69.0ddc6280e3f716e93b6c593c2953a297.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
  },
  {
    id: 2,
    title: "Coats & Parkas",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsOFWA4C4bbblRTw3VUE_ppfj5k3pEIHsZA&s",
  },
  {
    id: 3,
    title: "Tees & T-shirt",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/r/w/d/l-plain-t-shirt-the-shopping-field-original-imagfrr8z7xfkrzh.jpeg?q=90&crop=false",
  },
];

export const youngFashionList: ProductCard[] = [
  {
    id: 1,
    title: "Trending on Instagram",
    image:
      "https://static.vecteezy.com/system/resources/previews/006/165/355/non_2x/portrait-of-cheerful-young-asian-woman-student-in-casual-clothes-with-backpack-using-laptop-and-pointing-at-camera-with-finger-isolated-on-yellow-background-education-in-college-university-concept-photo.jpg",
  },
  {
    id: 2,
    title: "All under ₹500",
    image:
      "https://img.freepik.com/premium-photo/guy-with-red-curly-hair-red-tshirt-with-fashion-hat-yellow-background-unaltered_561613-14515.jpg",
  },
];

export const SALES_DAY_IMAGE = SALES_DAY_PIC;

export const FooterCompanyLink = [
  {
    id: 1,
    name: "About",
    link: "/",
  },
  {
    id: 2,
    name: "Contact Us",
    link: "/",
  },
  {
    id: 3,
    name: "Support",
    link: "/",
  },
  {
    id: 4,
    name: "Careers",
    link: "/",
  },
];

export const FooterQuickLink = [
  {
    id: 1,
    name: "Share Location",
    link: "/",
  },
  {
    id: 2,
    name: "Orders Tracking",
    link: "/",
  },
  {
    id: 3,
    name: "Size Guide",
    link: "/",
  },
  {
    id: 4,
    name: "FAQs",
    link: "/",
  },
];

export const FooterLegalLink = [
  {
    id: 1,
    name: "Terms & Condition",
    link: "/",
  },
  {
    id: 2,
    name: "Privacy Policy",
    link: "/",
  },
];

export const signUpForm = {
  name: "",
  email: "",
  password: "",
  mobile: -1,
  confirmPassword: "",
};

export const loginForm = {
  email: "",
  password: "",
};
