import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public menuOpened:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public toggleMenu():void{
    this.menuOpened.next(!this.menuOpened);
  }
}
