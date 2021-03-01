import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-giorgi-mazniashvili-riddle',
  templateUrl: './giorgi-mazniashvili-riddle.component.html',
  styleUrls: ['./giorgi-mazniashvili-riddle.component.scss']
})
export class GiorgiMazniashviliRiddleComponent implements OnInit {

  public answerSubmitLoading:boolean=false;
  public form:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  private initializeForm():void{
    this.form = this.formBuilder.group({
      firstInput:["",Validators.required],
      secondInput:["",Validators.required]
    });
  }
  public submitAnswer():void{
    this.answerSubmitLoading = true;
  }

}
