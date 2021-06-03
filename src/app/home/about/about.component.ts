import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private translateService:TranslateService) { }

  ngOnInit(): void {
  }
  public get currentLanguage():string{
    return this.translateService.currentLang;
  }

}
