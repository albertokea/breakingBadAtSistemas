import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Character } from 'src/app/models/character.interface';

export const selectCharacter = createFeatureSelector<Character[]>('characters');

export const selectCharacterById = createSelector(
  selectCharacter,
  (characters: Character[], props: { idCharacter: number }) => {
    return characters.filter(
      (character) => character.char_id === props.idCharacter
    )[0];
  }
);
