import { createFeatureSelector } from '@ngrx/store';

export const selectDataIsLoaded = createFeatureSelector<boolean>('dataLoaded');
