import { LocalStorageService } from 'src/app/core/services/local-strorage.service';
import { effect, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
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
    private localStorageService: LocalStorageService
  ) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      switchMap(() =>
        this.localStorageService.getItem<IUser>('user').pipe(
          map((user) => {
            console.log('[DEBUG] User', user);
            if (user) {
              console.log('[Effect] Dispatching loadUserSuccess:', user);
              return loadUserSuccess({ user });
            } else {
              console.log('[Effect] ERROR');
              throw new Error('Invalid user data in local storage');
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
