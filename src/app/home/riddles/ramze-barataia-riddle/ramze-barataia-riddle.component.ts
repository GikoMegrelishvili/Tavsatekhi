import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ramze-barataia-riddle',
  templateUrl: './ramze-barataia-riddle.component.html',
  styleUrls: ['./ramze-barataia-riddle.component.scss'],
})
export class RamzeBarataiaRiddleComponent implements OnInit {
  public answerSubmitLoading: boolean = false;
  public form: FormGroup;
  public rocketShow:boolean = true;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }
  private initializeForm(): void {
    this.form = this.formBuilder.group({
      firstInput: ['', Validators.required],
    });
  }
  public submitAnswer(): void {
    this.answerSubmitLoading = true;
  }
  public launchRocket():void{
    setTimeout(() => {
      this.rocketShow = false;
    }, 10000);
    document.getElementById("rocket").classList.add('launch');
  }

}
