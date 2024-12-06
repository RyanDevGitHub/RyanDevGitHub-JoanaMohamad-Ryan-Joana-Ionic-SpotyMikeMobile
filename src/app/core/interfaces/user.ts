import { IPlaylist } from 'src/app/core/interfaces/playlistes';

type ERoleUser = 'user' | 'artist';

export interface IUser {
  role: ERoleUser;
  isEmailVerified: boolean;
  email: string;
  name: string;
  id: string;
}
export interface IToken {
  token: string;
}

export interface IArtist {
  id: string;
  label: string;
  firstName: string;
  description: string;
  avatar: string;
  subscribers: string[];
}

export interface IUserDataBase {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  tel?: string;
  sexe: string;
  favorites: string[];
  artiste?: IArtist;
  playlists: IPlaylist[];
  lastsplayeds: string[];
  created_at: string;
  role: ERoleUser;
}

export interface IUserUpdateDataBase {
  id?: string;
  firstName: string;
  lastName?: string;
  email?: string;
  tel?: string;
  sexe?: string;
  favorites?: string[];
  artiste?: IArtist;
  playlists?: [IPlaylist[]];
  lastsplayeds?: string[];
  created_at?: string;
}
