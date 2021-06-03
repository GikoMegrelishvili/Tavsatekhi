import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PeopleEnum } from '../../models/enums';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-answer-dialog',
  templateUrl: './answer-dialog.component.html',
  styleUrls: ['./answer-dialog.component.scss'],
})
export class AnswerDialogComponent implements OnInit {
  public isAnswerCorrect: boolean;
  public person: PeopleEnum;
  public riddlePersonName: string;

  private _subs = new Subscription();

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.subToDialogValues();
  }

  public close():void{
    this.dialogService.closeDialog();
  }
  private subToDialogValues(): void {
    this._subs.add(this.subToIsAnswerCorrect());
    this._subs.add(this.subToPageToNavigateTo());
  }
  private subToIsAnswerCorrect(): Subscription {
    return this.dialogService.isAnswerCorrect.subscribe(
      (isCorrect) => (this.isAnswerCorrect = isCorrect)
    );
  }
  private subToPageToNavigateTo(): Subscription {
    return this.dialogService.person.subscribe(
      (person) => (this.person = person)
    );
  }
}
