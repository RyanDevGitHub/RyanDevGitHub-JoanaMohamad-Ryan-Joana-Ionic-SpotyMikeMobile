import {
  EntityState,
  EntityAdapter,
  createEntityAdapter,
  Dictionary,
} from '@ngrx/entity';

import { createReducer, on } from '@ngrx/store';
import * as ActionSOngs from '../action/song.action';
import * as ActionUser from '../action/user.action';
import { IUser } from '../../interfaces/user';

export interface UserState {
  user: IUser | null; // Un seul utilisateur
  loading: boolean; // Indique si un chargement est en cours
  error: string | null; // Stocke les erreurs
}

export const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  // Début du chargement
  on(ActionUser.loadUser, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  // Chargement réussi
  on(ActionUser.loadUserSuccess, (state, { user }) => {
    console.log('[Reducer] Updating state with user:', user);
    return {
      ...state,
      user, // Stocke l'utilisateur dans l'état
      loading: false,
    };
  }),

  // Échec du chargement
  on(ActionUser.loadUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
