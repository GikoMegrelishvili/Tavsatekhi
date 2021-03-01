import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-niko-nikoladze-riddle',
  templateUrl: './niko-nikoladze-riddle.component.html',
  styleUrls: ['./niko-nikoladze-riddle.component.scss'],
})
export class NikoNikoladzeRiddleComponent implements OnInit {
  public answerSubmitLoading: boolean = false;
  public form: FormGroup;
  public currentLanguage;
  constructor(private formBuilder: FormBuilder,public translateService:TranslateService) {}

  ngOnInit(): void {
    this.currentLanguage = this.translateService.currentLang;
    console.log(this.currentLanguage);
    this.initializeForm();
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
  }

}
