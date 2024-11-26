import { IMusic } from './music';

export interface IAlbum {
  cover: string;
  id: string;
  label: string;
  song: IMusic[];
  title: string;
}
