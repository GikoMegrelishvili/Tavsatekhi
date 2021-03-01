import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'quest';
  public browserLang: string;

  constructor(public translate: TranslateService, private titleService: Title) {
    translate.addLangs(['en', 'ka']);
    if (localStorage.getItem('choosenLanguage')) {
      translate.setDefaultLang(localStorage.getItem('choosenLanguage'));
      translate.use(localStorage.getItem('choosenLanguage'));
    } else {
      translate.setDefaultLang('ka');
      translate.use('ka');
    }
    translate.onLangChange.subscribe((lang) => {
      this.browserLang = lang;
      if (lang == 'en') {
        titleService.setTitle('Tavsatekhi');
      } else {
        titleService.setTitle('თავსატეხი');
      }
    });
  }
  ngOnInit() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.browserLang = event.lang;
      if (event.lang == 'en') {
        this.titleService.setTitle('Tavsatekhi');
      } else {
        this.titleService.setTitle('თავსატეხი');
      }
    });
  }
}
