import {
  EntityState,
  EntityAdapter,
  createEntityAdapter,
  Dictionary,
} from '@ngrx/entity';
import { IMusic } from '../../interfaces/music';
import { createReducer, on } from '@ngrx/store';
import * as ActionSOngs from '../action/song.action';

export interface SongState extends EntityState<IMusic> {
  loading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<IMusic> = createEntityAdapter<IMusic>();

// Initialisation de l'état avec les valeurs par défaut fournies par l'adapter
export const initialState: SongState = adapter.getInitialState({
  loading: false,
  error: null,
});

export const musicReducer = createReducer(
  initialState,
  on(ActionSOngs.loadSong, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ActionSOngs.loadSongSuccess, (state, { songs }) => {
    console.log('[Reducer] Updating state with songs:', songs);
    return adapter.setAll(songs, state);
  }),
  on(ActionSOngs.loadSongFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

// Générer les sélecteurs
const { selectAll, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors();

export const selectAllSongs = selectAll;
export const selectSongEntities = selectEntities;
export const selectSongIds = selectIds;
export const selectTotalSongs = selectTotal;
