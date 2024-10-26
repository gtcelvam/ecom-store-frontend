import { ProductCard } from "@/types/constants";
import SALES_DAY_PIC from "@/public/images/salesDay.webp";
import CART_ICON from "@/public/icons/cart-bag.svg";
import DELETE_ICON from "@/public/icons/delete.svg";
import rippleBlackLoader from "@/public/loaders/ripple-loader-black.svg";
import tubeThemeLoader from "@/public/loaders/tube-loader-theme.svg";

export const pageRoutes = {
  home: "/",
  products: "/products",
  orders: "/orders",
};

//Razorypay
export const RAZOR_PAY_ID = process.env.NEXT_PUBLIC_RAZOR_PAY_ID;

//Snippets
export const SNIPPET_COMMA = "&apos;";
export const RUPEES_SNIPPET = "₹ ";

//configs
export const BACKEND_URL = {
  prod: process.env.NEXT_PUBLIC_BACKEND_URL,
  dev: process.env.NEXT_PUBLIC_BACKEND_URL_LOCAL,
};

export const COOKIE_ACCESS_TOKEN = "access-token";
export const ADDITIONAL_CHARGE = 50;

export const RAZOR_PAY_URL = "https://checkout.razorpay.com/v1/checkout.js";

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

export const commonIcons = {
  cartIcon: CART_ICON,
  deleteIcon: DELETE_ICON,
};

export const paymentStatus = {
  success: "Success",
  failure: "Failure",
};

export const showCaseList: ProductCard[] = [
  {
    id: 1,
    title: "Hoodies & Sweetshirt",
    image: {
      src: "https://i5.walmartimages.com/asr/40c65bfe-c0d9-4f34-8246-750c91561e69.0ddc6280e3f716e93b6c593c2953a297.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    },
    variants: [
      {
        id: 1,
        price: 200,
      },
    ],
  },
  {
    id: 2,
    title: "Coats & Parkas",
    image: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsOFWA4C4bbblRTw3VUE_ppfj5k3pEIHsZA&s",
    },
    variants: [
      {
        id: 2,
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: "Tees & T-shirt",
    image: {
      src: "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/r/w/d/l-plain-t-shirt-the-shopping-field-original-imagfrr8z7xfkrzh.jpeg?q=90&crop=false",
    },
    variants: [
      {
        id: 3,
        price: 200,
      },
    ],
  },
];

export const youngFashionList: ProductCard[] = [
  {
    id: 1,
    title: "Trending on Instagram",
    image: {
      src: "https://static.vecteezy.com/system/resources/previews/006/165/355/non_2x/portrait-of-cheerful-young-asian-woman-student-in-casual-clothes-with-backpack-using-laptop-and-pointing-at-camera-with-finger-isolated-on-yellow-background-education-in-college-university-concept-photo.jpg",
    },
    variants: [
      {
        id: 1,
        price: 200,
      },
    ],
  },

  {
    id: 2,
    title: "All under ₹500",
    image: {
      src: "https://img.freepik.com/premium-photo/guy-with-red-curly-hair-red-tshirt-with-fashion-hat-yellow-background-unaltered_561613-14515.jpg",
    },
    variants: [{ id: 2, price: 200 }],
  },
];

export const SampleProductList = [
  {
    id: 1,
    title: "T-shirt",
    description: "Lorem Ipsum ",
    image:
      "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077",
    price: 200,
  },
  {
    id: 2,
    title: "Saree",
    description: "Lorem Ipsum ",
    image:
      "https://i.pinimg.com/736x/d7/2f/4c/d72f4cf449b3d9545e975ba725ec87fc.jpg",
    price: 500,
  },
  {
    id: 3,
    title: "Hoodie",
    description: "Lorem Ipsum ",
    image:
      "https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/your-design-here-hoodie-bottlegreen/0.webp",
    price: 650,
  },
  {
    id: 4,
    title: "Jeans Pant",
    description: "Lorem Ipsum ",
    image:
      "https://images.othoba.com/images/thumbs/0495585_mens-slim-fit-stretchable-jeans-pant-light-blue.webp",
    price: 750,
  },
];

export const SALES_DAY_IMAGE = SALES_DAY_PIC;
export const PAYMENT_SUCCESS_URL =
  "https://cdn2.iconfinder.com/data/icons/weby-flat-vol-1/512/1_Approved-check-checkbox-confirm-green-success-tick-512.png";

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

export const defaultUserData = {
  name: "",
  email: "",
  id: "",
  mobile: "",
  cartId: "",
};

export const socialMediaMetaContent = {
  title: "TS ECOM SHOP",
  description: "Shopping Site Project",
  image: LOGO_URL,
  url: "https://ts-e-store.vercel.app",
};

//loaders
export const LOADERS = {
  rippleBlackLoader,
  tubeThemeLoader,
};
