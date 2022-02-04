import { createReducer, on } from '@ngrx/store';
import { Character } from 'src/app/models/character.interface';
import * as characterActions from '../actions/character.actions';

export const characterInitialState: Character[] = [];

const _characterReducer = createReducer(
  characterInitialState,
  on(
    characterActions.loadCharactersSuccess,
    (state, { characters }) => characters
  )
);

export function characterReducer(state: any, action: any) {
  return _characterReducer(state, action);
}
