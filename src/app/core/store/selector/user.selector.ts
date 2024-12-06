import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UserState } from '../reducer/user.reducer';

// Sélecteur pour accéder à l'état utilisateur
export const selectUserState = createFeatureSelector<UserState>('user');

// Sélecteur pour récupérer l'utilisateur unique
export const selectUser = createSelector(selectUserState, (state) => {
  console.log('[DEBUG] User in state:', state.user);
  return state.user;
});

// Sélecteur pour vérifier si un chargement est en cours
export const selectUserLoading = createSelector(
  selectUserState,
  (state) => state.loading
);

// Sélecteur pour récupérer les éventuelles erreurs
export const selectUserError = createSelector(
  selectUserState,
  (state) => state.error
);
