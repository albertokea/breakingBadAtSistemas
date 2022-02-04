import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterViewRoutingModule } from './character-view-routing.module';
import { CharacterViewComponent } from './character-view.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [CharacterViewComponent],
  imports: [
    CommonModule,
    CharacterViewRoutingModule,
    RouterModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    TranslateModule,
    MatSnackBarModule,
  ],
})
export class CharacterViewModule {}
