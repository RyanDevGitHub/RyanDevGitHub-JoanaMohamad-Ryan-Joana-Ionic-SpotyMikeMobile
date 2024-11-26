export interface IMusic {
  cover: string;
  title: string;
  artistId: string;
  duration: string;
  url: string;
  id: string;
  featuring: string[];
  listeningCount: string;
  lyrics: string;
}

export enum PlaybackMode {
  Default = 'default',
  Shuffle = 'shuffle',
  Loop = 'loop',
}
