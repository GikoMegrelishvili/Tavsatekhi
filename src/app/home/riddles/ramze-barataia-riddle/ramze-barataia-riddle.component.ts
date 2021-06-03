import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeopleEnum } from 'src/app/shared/models/enums';
import { AnswerService } from 'src/app/shared/services/answer.service';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-ramze-barataia-riddle',
  templateUrl: './ramze-barataia-riddle.component.html',
  styleUrls: ['./ramze-barataia-riddle.component.scss'],
})
export class RamzeBarataiaRiddleComponent implements OnInit {
  public answerSubmitLoading: boolean = false;
  public form: FormGroup;
  public rocketShow:boolean = true;
  constructor(private formBuilder: FormBuilder,private answerService:AnswerService,private dialogService:DialogService) {}

  ngOnInit(): void {
    this.initializeForm();
  }
  private initializeForm(): void {
    this.form = this.formBuilder.group({
      answer: ['', Validators.required],
    });
  }
  public submitAnswer(): void {
    this.answerSubmitLoading = true;
    const userAnswer =this.form.controls.answer.value.toUpperCase();
    const isAnswerTrue = this.answerService.isBarataiaAnswerTrue(userAnswer);
    this.handleAnswerDialog(isAnswerTrue);
    this.answerSubmitLoading = false;
  }

  private handleAnswerDialog(isAnswerTrue):void{
    if(isAnswerTrue){
      this.dialogService.openDialogAnswerCorrect(PeopleEnum.BARATAIA);
    }else{
      this.dialogService.openDialogAnswerIncorrect();
    }
  }

  public launchRocket():void{
    setTimeout(() => {
      this.rocketShow = false;
    }, 10000);
    document.getElementById("rocket").classList.add('launch');
  }

}
