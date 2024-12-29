import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { adapter, SongState } from '../reducer/song.reducer';
import { IMusic, MusicGenre } from '../../interfaces/music';
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

// Sélecteur pour les 5 chansons avec le plus de listeningCount
export const selectTopSongsByListeningCount = createSelector(
  selectAllSongs,
  (songs) => {
    console.log('[DEBUG] Filtering top 5 songs by listeningCount:', songs);
    return songs
      .sort((a, b) => b.listeningCount - a.listeningCount) // Trier par listeningCount décroissant
      .slice(0, 5); // Limiter à 5 chansons
  }
);

import { selectUser } from './user.selector';

export const selectLastSongsByUser = createSelector(
  selectUser,
  selectAllSongs,
  (user, songs): IMusic[] => {
    console.log('[DEBUG] User last songs IDs:', user?.lastsplayeds);
    if (!user || !user.lastsplayeds) {
      return []; // Retourner une liste vide si l'utilisateur ou lastSongs est indéfini
    }
    return user.lastsplayeds
      .map((songId) => songs.find((song) => song.id === songId))
      .filter((song): song is IMusic => song !== undefined); // Filtrer et garantir le type
  }
);

export const selectSongsBySearchTerm = (searchTerm: string) =>
  createSelector(selectAllSongs, (songs) => {
    console.log(
      '[DEBUG] selectSongsBySearchTerm: Songs before filtering:',
      songs
    ); // Avant filtrage
    const lowerCaseTerm = searchTerm.toLowerCase();
    const filteredSongs = songs.filter((song) =>
      song.title.toLowerCase().includes(lowerCaseTerm)
    );
    console.log(
      '[DEBUG] selectSongsBySearchTerm: Filtered songs:',
      filteredSongs
    ); // Après filtrage
    return filteredSongs;
  });
