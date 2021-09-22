import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleEnum } from 'src/app/shared/models/enums';
import { RiddleService } from './riddle.service';

@Component({
  selector: 'app-riddles',
  templateUrl: './riddles.component.html',
  styleUrls: ['./riddles.component.scss'],
})
export class RiddlesComponent implements OnInit {
  constructor(private _riddleService: RiddleService, private _router: Router) {}

  ngOnInit(): void {}

  public get PeopleEnum(): typeof PeopleEnum {
    return PeopleEnum;
  }
  public navigateToMap(link): void {
    // window.location.href=link;
    window.open(link, '_blank');
  }
  public navigateToRiddle(person: PeopleEnum): void {
    switch (person) {
      case PeopleEnum.BARATAIA:
        this._router.navigate(['/riddles/XkZKuxiXbn1245684zv']);
        break;
      case PeopleEnum.KAKABADZE:
        this._router.navigate(['/riddles/dxoqwjnJgiko9szxz22']);
        break;
      case PeopleEnum.MAZNIASHVILI:
        this._router.navigate(['/riddles/xmxzGisKNBz25q6z30x']);
        break;
      case PeopleEnum.MACHABELI:
        this._router.navigate(['/riddles/1smxVslZghiwqlsdmxz']);
        break;
      case PeopleEnum.NIKOLADZE:
        this._router.navigate(['/riddles/dmxqRsxlf87Sgelash5']);
        break;
    }
  }
  public navigate(person: PeopleEnum, link: string): void {
    if (this._riddleService.getIfRiddleWasVisited(person)) {
      this.navigateToRiddle(person);
    } else {
      this.navigateToMap(link);
    }
  }
}
