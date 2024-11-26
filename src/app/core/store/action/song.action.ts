import { createAction, props } from '@ngrx/store';
import { IMusic } from '../../interfaces/music';

export const loadSong = createAction('[Music] Load Song');
export const loadSongSuccess = createAction(
  '[Music] Load Song Success',
  props<{ songs: IMusic[] }>()
);
export const loadSongFailure = createAction(
  '[Music] Load Song Failure',
  props<{ error: string }>()
);
