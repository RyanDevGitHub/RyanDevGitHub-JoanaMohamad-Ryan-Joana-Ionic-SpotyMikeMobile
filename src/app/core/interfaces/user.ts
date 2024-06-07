type ERoleUser =
'user'|'artist';

export interface IUser{
    role: ERoleUser,
    isEmailVerified: boolean,
    email: string,
    name: string;
    id:string;
}
export interface IToken{
    token:string 
}
