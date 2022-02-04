import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { Character } from 'src/app/models/character.interface';
import { environment } from 'src/environments/environment';
import { characterReducer } from './character.reducer';
import { dataLoadedReducer } from './dataLoaded.reducer';

export interface AppState {
  characters: Character[];
  dataLoaded: boolean;
}

export const reducers: ActionReducerMap<AppState> = {
  characters: characterReducer,
  dataLoaded: dataLoadedReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
