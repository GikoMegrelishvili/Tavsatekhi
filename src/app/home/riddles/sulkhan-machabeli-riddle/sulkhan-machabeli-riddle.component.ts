import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeopleEnum } from 'src/app/shared/models/enums';
import { AnswerService } from 'src/app/shared/services/answer.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { RiddleService } from '../riddle.service';

@Component({
  selector: 'app-sulkhan-machabeli-riddle',
  templateUrl: './sulkhan-machabeli-riddle.component.html',
  styleUrls: ['./sulkhan-machabeli-riddle.component.scss'],
})
export class SulkhanMachabeliRiddleComponent implements OnInit {
  public form = new FormGroup({
    answer: new FormControl('', Validators.required),
  });
  constructor(
    private _riddleService: RiddleService,
    private _answerService: AnswerService,
    private _dialogService: DialogService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._riddleService.markRiddleAsVisited(PeopleEnum.MACHABELI);
  }
  public submitAnswer(): void {
    if (this.form.invalid) return;
    const isAnswerTrue = this._answerService.isMachabeliSabaAnswerTrue(
      this.form.controls.answer.value.toUpperCase()
    );
    this.handleDialog(isAnswerTrue);
  }
  private handleDialog(isAnswerTrue: boolean): void {
    if (isAnswerTrue) {
      this._dialogService.openDialogAnswerCorrect();
      this._router.navigate(['/people/sulkhan-saba-orbeliani']);
    } else {
      this._dialogService.openDialogAnswerIncorrect();
    }
  }
}
