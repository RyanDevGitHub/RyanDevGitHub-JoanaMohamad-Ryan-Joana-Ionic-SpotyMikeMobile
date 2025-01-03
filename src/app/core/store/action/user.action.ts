import { createAction, props } from '@ngrx/store';
import { IUser, IUserDataBase } from '../../interfaces/user';

export const loadUser = createAction('[User] Load User');
export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ user: IUser | IUserDataBase }>()
);
export const loadUserFailure = createAction(
  '[User] Load User Failure',
  props<{ error: string }>()
);
