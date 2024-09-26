export enum AuthenticationType {
  login = "login",
  signup = "signup",
}

export interface userDataType {
  name: string;
  id: string | number;
  email: string;
}

export interface ProductCard {
  id: string | number;
  title: string;
  image: {
    src: string;
  };
  price?: string | number;
  variants: { price: string | number }[];
}
