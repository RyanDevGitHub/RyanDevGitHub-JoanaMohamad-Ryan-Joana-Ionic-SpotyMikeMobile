import { effect, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { SongState } from '../reducer/song.reducer';
import {
  loadSong,
  loadSongFailure,
  loadSongSuccess,
} from './../action/song.action';
import { MusicServiceService } from '../../services/music-service.service';

@Injectable()
export class MusicEffects {
  constructor(
    private actions$: Actions,
    private musicService: MusicServiceService
  ) {}

  loadSong$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSong),
      switchMap(() =>
        this.musicService.getSongs().pipe(
          tap((songs) => console.log('[DEBUG] Songs fetched:', songs)), // Log
          map((songs) => loadSongSuccess({ songs })),
          catchError((error) => of(loadSongFailure({ error })))
        )
      )
    )
  );
}
