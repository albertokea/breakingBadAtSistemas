import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Character } from 'src/app/models/character.interface';

export enum CharacterActionsTypes {
  LoadCharaters = '[Characters] Load Characters',
  LoadCharatersSuccess = '[Characters] Load Characters Success',
  LoadCharatersError = '[Characters] Load Characters Error',
}

export const loadCharacters = createAction(CharacterActionsTypes.LoadCharaters);

export const loadCharactersSuccess = createAction(
  CharacterActionsTypes.LoadCharatersSuccess,
  props<{ characters: Character[] }>()
);

export const loadCharactersError = createAction(
  CharacterActionsTypes.LoadCharatersError,
  props<{ error: HttpErrorResponse }>()
);
