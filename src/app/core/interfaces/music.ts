export interface IMusic {
  cover: string;
  title: string;
  artistId: string;
  duration: string;
  url: string;
  id: string;
  featuring: string[];
  listeningCount: number;
  lyrics: string;
  createAt: { seconds: number; nanoseconds: number };
  genre: MusicGenre;
}

export interface IMusicDate {
  cover: string;
  title: string;
  artistId: string;
  duration: string;
  url: string;
  id: string;
  featuring: string[];
  listeningCount: string;
  lyrics: string;
  createAt: Date;
  genre: MusicGenre;
}

export enum PlaybackMode {
  Default = 'default',
  Shuffle = 'shuffle',
  Loop = 'loop',
}

export enum MusicGenre {
  Pop = 'pop',
  Rock = 'rock',
  Jazz = 'jazz',
}
