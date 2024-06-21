import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from '../app.state';
import { SongState,selectAll } from '../reducer/song.reducer';

export const selectSongState = createFeatureSelector<SongState>("song");

export const selectStoreList = createSelector(
  selectSongState,
  selectAll
);
