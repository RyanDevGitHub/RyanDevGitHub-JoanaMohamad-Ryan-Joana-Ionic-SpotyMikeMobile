import { createAction,props } from '@ngrx/store';
import { IMusic, IMusicList } from "../../interfaces/music";

export const loadSong = createAction('Load Song')
export const addSong = createAction('Add Song',props<{musics: IMusicList}>);