import { Component, OnInit } from '@angular/core';
import { MenuService } from './header/menu/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuOpened:boolean = false;
  constructor(private menuService:MenuService) { }


  ngOnInit(): void {
    this.menuState();
  }
  private menuState():void{
    this.menuService.menuOpened.subscribe((res:boolean)=>{
      this.menuOpened = res;
    })
  }

}
