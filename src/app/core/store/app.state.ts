import { IMusic } from "../interfaces/music";
import { IPlaylist } from "../interfaces/playlistes";

export interface AppState {
    music: IMusic
    playlist: IPlaylist
  }
