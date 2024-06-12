export interface IMusic {
    cover: string;
    title: string;
    artist: string;
    duration:string,
    url: string;
  }

  export interface IMusicList {
   musics:IMusic[]
  }


  export enum PlaybackMode {
    Default = 'default',
    Shuffle = 'shuffle',
    Loop = 'loop'
  }
