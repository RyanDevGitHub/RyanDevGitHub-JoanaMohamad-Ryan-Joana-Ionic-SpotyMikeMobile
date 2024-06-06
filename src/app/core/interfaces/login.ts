import { IToken, IUser } from "./user";
export interface LoginRequestError {
  code?: number;
  error: boolean;
  message: string;
}
export interface LoginRequestSuccess{
  code?: number;
  error: boolean;
  user: IUser;
  token:IToken;
}

export interface LoginField{
  email: string;
  password:string;
}