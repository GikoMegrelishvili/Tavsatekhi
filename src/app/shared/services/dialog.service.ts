import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {PeopleEnum} from "../models/enums";

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  public isAnswerDialogOpen:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAnswerCorrect:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public person:BehaviorSubject<PeopleEnum> = new BehaviorSubject<PeopleEnum>(null);

  public openDialogAnswerCorrect(pageToNavigateTo:PeopleEnum): void {
    this.isAnswerDialogOpen.next(true);
    this.isAnswerCorrect.next(true);
    this.person.next(pageToNavigateTo);
  }
  public openDialogAnswerIncorrect(): void {
    this.isAnswerDialogOpen.next(true);
    this.isAnswerCorrect.next(false);
  }
  public closeDialog():void{
    this.isAnswerDialogOpen.next(false);
    this.isAnswerCorrect.next(false);
    this.person.next(null);
  }
}
