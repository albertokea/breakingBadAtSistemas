import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  selectedLanguage: string = 'es';
  constructor(private readonly translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('es');
  }

  public changeLanguage() {
    this.selectedLanguage === 'es'
      ? this.setLanguage('en')
      : this.setLanguage('es');
  }

  private setLanguage(language: string) {
    this.translate.use(language);
    this.selectedLanguage = language;
  }
}
