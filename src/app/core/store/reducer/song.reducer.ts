import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { IMusic } from '../../interfaces/music';
import { createReducer, on } from '@ngrx/store';
import * as ActionSOngs from '../action/song.action';

export interface SongState extends EntityState<IMusic> {
  load: boolean;
}

// START - Sort
export function selectMusicId(music: IMusic): string {
  return music.id;
}

export function sortByTitle(a: IMusic, b: IMusic): number {
  return a.title.localeCompare(b.title);
}

export const adaptater: EntityAdapter<IMusic> = createEntityAdapter<IMusic>({
  selectId: selectMusicId,
  sortComparer: sortByTitle,
});

// END - Sort

export const initialState: SongState = adaptater.getInitialState({
  load: false,
});

export const songReducer = createReducer(
  initialState,
  on(ActionSOngs.loadSong, (state) => state),
  on(ActionSOngs.addSong, (state, musics:any ) => ({ ...state, musics: musics }))
);

//recpêration
export const { selectAll }  = adaptater.getSelectors();
