import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CharactersService } from 'src/app/api/characters.service';
import {
  CharacterActionsTypes,
  loadCharactersError,
} from '../actions/character.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadCharactersSuccess } from '../actions/character.actions';
import { of } from 'rxjs';

@Injectable()
export class CharactersEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly charactersService: CharactersService
  ) {}

  loadCharacters = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActionsTypes.LoadCharaters),
      mergeMap(() =>
        this.charactersService.getAll().pipe(
          map((characters) => loadCharactersSuccess({ characters })),
          catchError((error) => of(loadCharactersError(error)))
        )
      )
    )
  );
}
