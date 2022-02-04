import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.interface';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCharacter } from 'src/app/store/selectors/character.selector';
import {
  loadCharacters,
  loadCharactersError,
} from 'src/app/store/actions/character.actions';
import { TranslateService } from '@ngx-translate/core';
import { Actions, ofType } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  providers: [TranslateService],
})
export class CharactersComponent implements OnInit {
  characters$: Observable<Character[]> = this.store.select(selectCharacter);
  charctersError$!: Subscription;

  constructor(
    private readonly store: Store,
    private readonly _actions$: Actions,
    private readonly _snackBar: MatSnackBar,
    private readonly translate: TranslateService
  ) {}

  ngOnInit() {
    this.store.dispatch(loadCharacters());

    //Error handling
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

  ngOnDestroy() {
    this.charctersError$.unsubscribe();
  }
}
