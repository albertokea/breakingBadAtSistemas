import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCharacterById } from 'src/app/store/selectors/character.selector';
import {
  loadCharacters,
  loadCharactersError,
} from 'src/app/store/actions/character.actions';
import { CharactersService } from 'src/app/api/characters.service';
import { Character } from 'src/app/models/character.interface';
import { filter } from 'rxjs/operators';
import { selectDataIsLoaded } from 'src/app/store/selectors/dataLoaded.selector';
import { Actions, ofType } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss'],
})
export class CharacterViewComponent implements OnInit, OnDestroy {
  //Dispatch data if it is not done already
  isCharactersDispatched$: Subscription = this.store
    .select(selectDataIsLoaded)
    .pipe(filter((isDataLoaded) => !isDataLoaded))
    .subscribe(() => {
      this.store.dispatch(loadCharacters());
    });

  character$!: Subscription;
  charctersError$!: Subscription;
  character!: Character;

  randomQuote$!: Subscription;
  quote = '';

  constructor(
    private readonly store: Store,
    private readonly activatedRoute: ActivatedRoute,
    private readonly charactersService: CharactersService,
    private readonly _actions$: Actions,
    private readonly _snackBar: MatSnackBar,
    private readonly translate: TranslateService
  ) {}

  ngOnInit() {
    //Get data of the selected character
    this.activatedRoute.paramMap.subscribe((params) => {
      this.character$ = this.store
        .select((state) =>
          selectCharacterById(state, {
            idCharacter: parseInt(params.getAll('character_id')[0], 10),
          })
        )
        .pipe(filter((character) => character !== undefined))
        .subscribe((character) => {
          this.character = character;
          this.randomQuote$ = this.charactersService
            .getRandomCharacterQuote(character.name.replace(' ', '+'))
            .subscribe((quote) => {
              if (!this.quote) {
                this.quote = quote[0].quote;
              }
            });
        });
    });

    //Data error handling
    this.charctersError$ = this._actions$
      .pipe(ofType(loadCharactersError))
      .subscribe(() => {
        this._snackBar.open(
          this.translate.instant('error.characters_error'),
          'Cerrar',
          {
            duration: 5000,
            panelClass: ['snackbar'],
          }
        );
      });
  }

  ngOnDestroy(): void {
    this.character$.unsubscribe();
    this.randomQuote$.unsubscribe();
    this.charctersError$.unsubscribe();
  }

  public getNewQuote() {
    this.randomQuote$ = this.charactersService
      .getRandomCharacterQuote(this.character.name.replace(' ', '+'))
      .subscribe((quote) => (this.quote = quote[0].quote));
  }
}
