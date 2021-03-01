import { Component, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { MenuService } from './menu/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuSub: Subscription;
  menuOpened: boolean = false;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuState();
  }
  public toggleMenu(): void {
    this.menuService.menuOpened.next(!this.menuOpened);
  }

  
  private menuState(): void {
    this.menuSub = this.menuService.menuOpened.subscribe((res: boolean) => {
      this.menuOpened = res;
    });
  }
}
