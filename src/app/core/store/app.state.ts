import { IMusic } from '../interfaces/music';
import { IPlaylist } from '../interfaces/playlistes';
import { SongState } from './reducer/song.reducer';
import { UserState } from './reducer/user.reducer';

export interface AppState {
  music: SongState; // Assurez-vous que le type est correct
  user: UserState;
}
