import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuOpened: boolean = true;
  constructor(
    private menuService: MenuService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.menuState();
  }

  private menuState(): void {
    this.menuService.menuOpened.subscribe((res: boolean) => {
      this.menuOpened = res;
    });
  }
  public toggleMenu(): void {
    this.menuService.menuOpened.next(!this.menuOpened);
  }
  public changeLanguage(lang): void {
    this.translate.use(lang);
    localStorage.setItem("choosenLanguage",lang);
  }
}
