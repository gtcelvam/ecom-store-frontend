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
  image: string;
  price?: string | number;
}
