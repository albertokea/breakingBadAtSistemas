import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'breakingBadAtSistemas';
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
