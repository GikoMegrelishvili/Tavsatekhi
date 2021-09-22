import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { PeopleEnum } from 'src/app/shared/models/enums';
import { AnswerService } from 'src/app/shared/services/answer.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { RiddleService } from '../riddle.service';

@Component({
  selector: 'app-niko-nikoladze-riddle',
  templateUrl: './niko-nikoladze-riddle.component.html',
  styleUrls: ['./niko-nikoladze-riddle.component.scss'],
})
export class NikoNikoladzeRiddleComponent implements OnInit {
  public answerSubmitLoading: boolean = false;
  public form: FormGroup;
  public currentLanguage;
  constructor(
    private formBuilder: FormBuilder,
    public translateService: TranslateService,
    private answerService: AnswerService,
    private dialogService: DialogService,
    private _riddleService:RiddleService,
    private _router:Router
  ) {}

  ngOnInit(): void {
    this.currentLanguage = this.translateService.currentLang;
    this.initializeForm();
    this._riddleService.markRiddleAsVisited(PeopleEnum.NIKOLADZE);
  }
  private initializeForm(): void {
    this.form = this.formBuilder.group({
      firstInput: [
        '',
        [Validators.required, Validators.maxLength(1), Validators.min(1)],
      ],
      secondInput: [
        '',
        [Validators.required, Validators.maxLength(1), Validators.min(1)],
      ],
      thirdInput: [
        '',
        [Validators.required, Validators.maxLength(1), Validators.min(1)],
      ],
      fourthInput: [
        '',
        [Validators.required, Validators.maxLength(1), Validators.min(1)],
      ],
    });
  }
  public submitAnswer(): void {
    this.answerSubmitLoading = true;
    const userAnswer = this.getAnswerFromForm();
    const isAnswerTrue = this.answerService.isNikoladzeAnswerTrue(userAnswer);
    this.handleAnswerDialog(isAnswerTrue);
    this.answerSubmitLoading = false;
  }

  private handleAnswerDialog(isAnswerTrue):void{
    if(isAnswerTrue){
      this.dialogService.openDialogAnswerCorrect();
      this._router.navigateByUrl("people/niko-nikoladze");
    }else{
      this.dialogService.openDialogAnswerIncorrect();
    }
  }

  private getAnswerFromForm(): string {
    let answer: string = '';
    Object.keys(this.form.controls).forEach((key) => {
      answer = answer + this.form.controls[key].value;
    });
    return answer.toUpperCase();
  }
}
