import {IPlaylists } from "./playlistes";

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

export interface IArtist{
    id:string,
    label:string,
    firstName:string,
    description:string,
    avatar:string,
    subscribers: string[],
}

export interface IUserDataBase{
    id:string,
    firstName:string,
    lastName:string,
    email:string,
    tel?:string,
    sexe:string,
    favorites:string[],
    artiste?: IArtist,
    playlists: IPlaylists[],
    lastsplayeds: string[],
    created_at:string,
}

export interface IUserUpdateDataBase{
    id?:string,
    firstName:string,
    lastName?:string,
    email?:string,
    tel?:string,
    sexe?:string,
    favorites?:string[],
    artiste?: IArtist,
    playlists?: IPlaylists[],
    lastsplayeds?: string[],
    created_at?:string,
}


