import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogService } from '../shared/services/dialog.service';
import { MenuService } from './header/menu/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public menuOpened: boolean = false;
  public isAnswerDialogOpen: boolean = false;

  private _subs = new Subscription();

  constructor(
    private menuService: MenuService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.subs();
  }
  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
  private subs(): void {
    this._subs.add(this.isMenuOpen);
    this._subs.add(this.subToIsDialogOpen);
  }
  private get isMenuOpen(): Subscription {
    return this.menuService.menuOpened.subscribe((isMenuOpen: boolean) => {
      this.menuOpened = isMenuOpen;
    });
  }
  private get subToIsDialogOpen(): Subscription {
    return this.dialogService.isAnswerDialogOpen.subscribe((isOpen) => {
      this.isAnswerDialogOpen = isOpen;
    });
  }
}
