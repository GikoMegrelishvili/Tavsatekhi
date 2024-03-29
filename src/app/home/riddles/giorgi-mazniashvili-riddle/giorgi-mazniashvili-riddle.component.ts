import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeopleEnum } from 'src/app/shared/models/enums';
import { AnswerService } from 'src/app/shared/services/answer.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { RiddleService } from '../riddle.service';

@Component({
  selector: 'app-giorgi-mazniashvili-riddle',
  templateUrl: './giorgi-mazniashvili-riddle.component.html',
  styleUrls: ['./giorgi-mazniashvili-riddle.component.scss'],
})
export class GiorgiMazniashviliRiddleComponent implements OnInit {
  public answerSubmitLoading: boolean = false;
  public form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private answerService: AnswerService,
    private dialogService: DialogService,
    private _riddleService: RiddleService,
    private _router:Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this._riddleService.markRiddleAsVisited(PeopleEnum.MAZNIASHVILI);
  }
  private initializeForm(): void {
    this.form = this.formBuilder.group({
      firstInput: ['', Validators.required],
      secondInput: ['', Validators.required],
    });
  }
  public submitAnswer(): void {
    this.answerSubmitLoading = true;
    const userAnswer = this.getAnswerFromForm();
    const isAnswerTrue =
      this.answerService.isMazniashviliAnswerTrue(userAnswer);
    this.handleAnswerDialog(isAnswerTrue);
    this.answerSubmitLoading = false;
  }

  private handleAnswerDialog(isAnswerTrue): void {
    if (isAnswerTrue) {
      this.dialogService.openDialogAnswerCorrect();
      this._router.navigateByUrl("people/giorgi-mazniashvili");
    } else {
      this.dialogService.openDialogAnswerIncorrect();
    }
  }

  private getAnswerFromForm(): string {
    let answer;
    Object.keys(this.form.controls).forEach((key) => {
      answer = answer + this.form.controls[key].value;
    });
    return answer.toUpperCase();
  }
}
