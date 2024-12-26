import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { adapter, SongState } from '../reducer/song.reducer';
import { MusicGenre } from '../../interfaces/music';
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

export const selectRecentSongs = createSelector(selectAllSongs, (songs) => {
  return songs
    .filter((song) => song.createAt)
    .sort((a, b) => toDate(b.createAt).getTime() - toDate(a.createAt).getTime())
    .slice(0, 3);
});

function toDate(timestamp: { seconds: number; nanoseconds: number }): Date {
  return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6);
}

// Sélecteur pour récupérer toutes les chansons d'un genre spécifique ou toutes si le genre est "All"
export const selectSongsByGenre = (genre: MusicGenre | 'All') =>
  createSelector(selectAllSongs, (songs) => {
    console.log('[DEBUG] Filtering songs by genre:', genre);
    if (genre === 'All') {
      return songs; // Retourne toutes les chansons si le genre est "All"
    }
    return songs.filter((song) => song.genre === genre);
  });
