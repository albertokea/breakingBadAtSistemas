import { createAction } from '@ngrx/store';

export enum CharacterActionsTypes {
  LoadedSuccess = '[Data Load] Data Loaded Succesfully',
}

export const loadedSuccess = createAction(CharacterActionsTypes.LoadedSuccess);
