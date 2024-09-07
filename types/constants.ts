export enum AuthenticationType {
  login = "login",
  signup = "signup",
}

export interface ProductCard {
  id: string | number;
  title: string;
  image: string;
}
