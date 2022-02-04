import { createReducer, on } from '@ngrx/store';
import * as dataLoadedActions from '../actions/dataLoaded.actions';

export const dataLoadedInitialState = false;

const _dataLoadedReducer = createReducer(
  dataLoadedInitialState,
  on(dataLoadedActions.loadedSuccess, (state) => true)
);

export function dataLoadedReducer(state: any, action: any) {
  return _dataLoadedReducer(state, action);
}
