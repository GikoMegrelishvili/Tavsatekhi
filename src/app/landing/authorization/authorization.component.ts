import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorTranslatorPipe } from 'src/app/shared/error-translator.pipe';
import { AuthorizationService } from './authorization.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit {

  form: FormGroup;
  authLoading: boolean = false;
  authError:string="";

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthorizationService,
    private errorTranslator: ErrorTranslatorPipe,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }
  private initializeForm(): void {
    this.form = this.formBuilder.group({
      captainMail: ["",Validators.required],
      password: ["",Validators.required],
    });
  }

  public login(): void {
    if (this.form.valid) {
      this.authLoading = true;
      this.authService
        .login(
          this.form.controls.captainMail.value,
          this.form.controls.password.value
        )
        .subscribe(
          (res: any) => {
            this.authLoading = false;
            this.authService.setAccessToken(res.accessToken);
            this.authService.setRefreshToken(res.refreshToken);
            this.authService.setTeamId(res.teamId);
            this.router.navigateByUrl("/tutorial");
          },
          (err: any) => {
            this.authLoading = false;
            this.authError = this.errorTranslator.transform(err.error.msg);
          }
        );
    }
  }

}
