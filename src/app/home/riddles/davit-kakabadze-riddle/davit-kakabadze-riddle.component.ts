import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeopleEnum } from 'src/app/shared/models/enums';
import { AnswerService } from 'src/app/shared/services/answer.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { RiddleService } from '../riddle.service';

@Component({
  selector: 'app-davit-kakabadze-riddle',
  templateUrl: './davit-kakabadze-riddle.component.html',
  styleUrls: ['./davit-kakabadze-riddle.component.scss'],
})
export class DavitKakabadzeRiddleComponent implements OnInit {

  public form: FormGroup;
  public answerSubmitLoading: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _riddleService: RiddleService,
    private answerService: AnswerService,
    private dialogService:DialogService,
    private _router:Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this._riddleService.markRiddleAsVisited(PeopleEnum.KAKABADZE);
  }
  public chooseShape(id): void {
    this.form.controls.shape.setValue(id);
  }
  public chooseNumber(id): void {
    this.form.controls.number.setValue(id);
  }
  public chooseColor(id): void {
    this.form.controls.color.setValue(id);
  }
  public chooseBackground(id): void {
    this.form.controls.background.setValue(id);
  }
  public submitAnswer(): void {
    this.answerSubmitLoading = true;
    const isAnswerTrue = this.answerService.isKakabadzeAnswerTrue(this.answer);
    this.handleAnswerDialog(isAnswerTrue);
    this.answerSubmitLoading = false;
  }
  private handleAnswerDialog(isAnswerTrue): void {
    if (isAnswerTrue) {
      this.dialogService.openDialogAnswerCorrect();
      this._router.navigateByUrl("/people/davit-kakabadze");
    } else {
      this.dialogService.openDialogAnswerIncorrect();
    }
  }
  private get answer():Array<number>{
    const { shape, number, color, background } = this.form.value;
    return [shape,number,color,background];
  }
  public initForm(): void {
    this.form = this._fb.group({
      shape: ['', Validators.required],
      number: ['', Validators.required],
      color: ['', Validators.required],
      background: ['', Validators.required],
    });
  }
}
