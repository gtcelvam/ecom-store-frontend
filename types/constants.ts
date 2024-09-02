export enum AuthenticationType {
  login = "login",
  signup = "signup",
}

export interface ShowCardType {
  id: string | number;
  title: string;
  image: string;
}
