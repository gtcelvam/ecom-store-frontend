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
  variants: { id: number; price: string | number }[];
}

export interface OrderDetails {
  id: string | number;
  created_at: string;
  email: string;
  total_price: string;
  line_items: {
    id: string;
    name: string;
    quantity: number;
  }[];
}
