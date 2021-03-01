import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleCardComponent } from './people-card/people-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptorService } from './http.interceptor';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { RouterModule } from '@angular/router';
import { InstructionComponent } from './instruction/instruction.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { AboutProjectComponent } from './about-project/about-project.component';

@NgModule({
  declarations: [PeopleCardComponent, LanguageSwitcherComponent, UnderConstructionComponent, InstructionComponent,ClickOutsideDirective, AboutProjectComponent],
  imports: [CommonModule,FormsModule,ReactiveFormsModule,FormsModule,TranslateModule,RouterModule],
  exports: [PeopleCardComponent, TranslateModule,LanguageSwitcherComponent,UnderConstructionComponent],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpErrorInterceptorService,
      multi:true
    }
  ],
})
export class SharedModule {}
