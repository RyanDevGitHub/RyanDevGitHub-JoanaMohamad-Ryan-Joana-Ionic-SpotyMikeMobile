import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { adapter, SongState } from '../reducer/song.reducer';
// Sélecteur pour récupérer l'état de la musique
export const selectMusicState = createFeatureSelector<SongState>('music');

// Sélecteurs générés par l'adapter
const { selectAll, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors();

// Sélecteurs spécifiques
export const selectAllSongs = createSelector(
  selectMusicState,
  (state: SongState) => {
    console.log('[DEBUG] State in selectAllSongs:', state);
    return state ? adapter.getSelectors().selectAll(state) || [] : [];
  }
);

export const selectLastPlayedSongs = createSelector(selectAllSongs, (songs) => {
  console.log('[DEBUG] LastPlayedSongs selectAllSongs:', songs);
  return songs;
});

export const selectSongEntities = createSelector(
  selectMusicState,
  selectEntities
);
export const selectSongIds = createSelector(selectMusicState, selectIds);
export const selectTotalSongs = createSelector(selectMusicState, selectTotal);

// Sélecteurs pour charger l'état de la musique
export const selectLoading = createSelector(
  selectMusicState,
  (state) => state.loading
);
export const selectError = createSelector(
  selectMusicState,
  (state) => state.error
);

export const debugSelectAllSongs = createSelector(selectAllSongs, (songs) => {
  console.log('[DEBUG] Songs from selectAllSongs:', songs);
  return songs;
});
