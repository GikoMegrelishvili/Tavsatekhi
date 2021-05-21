import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleCardComponent } from './people-card/people-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InstructionComponent } from './instruction/instruction.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { AboutProjectComponent } from './about-project/about-project.component';

@NgModule({
  declarations: [PeopleCardComponent, LanguageSwitcherComponent, InstructionComponent,ClickOutsideDirective, AboutProjectComponent],
  imports: [CommonModule,FormsModule,ReactiveFormsModule,FormsModule,TranslateModule,RouterModule],
  exports: [PeopleCardComponent, TranslateModule,LanguageSwitcherComponent],
})
export class SharedModule {}
