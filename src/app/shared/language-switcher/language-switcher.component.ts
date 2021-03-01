import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent implements OnInit {
  language;
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    if (this.translateService.currentLang == 'en') {
      this.language = true;
    } else {
      this.language = false;
    }
  }

  public changeLanguage(lang): void {
    this.translateService.use(lang);
    localStorage.setItem('choosenLanguage', lang);
  }
}
