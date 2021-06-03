import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleCardComponent } from './components/people-card/people-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from './click-outside.directive';
import { AnswerDialogComponent } from './components/answer-dialog/answer-dialog.component';

@NgModule({
  declarations: [PeopleCardComponent, LanguageSwitcherComponent,ClickOutsideDirective, AnswerDialogComponent],
  imports: [CommonModule,FormsModule,ReactiveFormsModule,FormsModule,TranslateModule,RouterModule],
  exports: [PeopleCardComponent, TranslateModule,LanguageSwitcherComponent,AnswerDialogComponent],
})
export class SharedModule {}
