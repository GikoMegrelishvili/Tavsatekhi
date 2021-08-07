import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-davit-kakabadze-riddle',
  templateUrl: './davit-kakabadze-riddle.component.html',
  styleUrls: ['./davit-kakabadze-riddle.component.scss']
})
export class DavitKakabadzeRiddleComponent implements OnInit {

  public form:FormGroup;

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm():void{
    this.form = this._fb.group({
      shape:["",Validators.required],
      number:["",Validators.required],
      color:["",Validators.required],
      background:["",Validators.required]
    });
  }

}
