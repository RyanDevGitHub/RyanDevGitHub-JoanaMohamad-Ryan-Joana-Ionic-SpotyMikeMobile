import { UserRepositoryService } from './../../services/repositories/user-repository.service';
import { LocalStorageService } from 'src/app/core/services/local-strorage.service';
import { effect, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import {
  catchError,
  defaultIfEmpty,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import {
  loadUser,
  loadUserFailure,
  loadUserSuccess,
} from '../action/user.action';
import { IUser } from '../../interfaces/user';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private userRepositoryService: UserRepositoryService
  ) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      switchMap(() =>
        this.localStorageService.getItem<IUser>('user').pipe(
          switchMap((localUser) => {
            if (localUser) {
              console.log('[DEBUG] Local user found:', localUser);
              // Appeler la BDD pour obtenir les données mises à jour
              return from(
                this.userRepositoryService.getUserByField(localUser.id)
              ).pipe(
                // Conversion Promise -> Observable
                map((updatedUser) => {
                  console.log('[Effect] Updated user from DB:', updatedUser);
                  return loadUserSuccess({ user: updatedUser }); // Mise à jour avec les données de la BDD
                }),
                catchError((error) => {
                  console.error('[Effect] Error fetching user from DB:', error);
                  console.log(
                    '[Effect] Falling back to local user:',
                    localUser
                  );
                  // Fallback : utiliser l'utilisateur local
                  return of(loadUserSuccess({ user: localUser }));
                })
              );
            } else {
              console.log('[Effect] No local user found');
              return of(
                loadUserFailure({ error: 'No user found in local storage' })
              );
            }
          }),
          catchError((error) =>
            of(loadUserFailure({ error: error.message || 'Unknown error' }))
          )
        )
      )
    )
  );
}
