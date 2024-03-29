import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './header/menu/menu.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { RiddlesComponent } from './riddles/riddles.component';
import { PeopleComponent } from './people/people.component';
import { SharedModule } from '../shared/shared.module';
import { TutorialComponent } from './tutorial/tutorial.component';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SulkhanMachabeliRiddleComponent } from './riddles/sulkhan-machabeli-riddle/sulkhan-machabeli-riddle.component';
import { DavitKakabadzeRiddleComponent } from './riddles/davit-kakabadze-riddle/davit-kakabadze-riddle.component';
import { GiorgiMazniashviliRiddleComponent } from './riddles/giorgi-mazniashvili-riddle/giorgi-mazniashvili-riddle.component';
import { RamzeBarataiaRiddleComponent } from './riddles/ramze-barataia-riddle/ramze-barataia-riddle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NikoNikoladzeRiddleComponent } from './riddles/niko-nikoladze-riddle/niko-nikoladze-riddle.component';
import { DavitKakabadzeInfoComponent } from './people/davit-kakabadze-info/davit-kakabadze-info.component';
import { GiorgiMazniashviliInfoComponent } from './people/giorgi-mazniashvili-info/giorgi-mazniashvili-info.component';
import { NikoNikoladzeInfoComponent } from './people/niko-nikoladze-info/niko-nikoladze-info.component';
import { RamzeBarataiaInfoComponent } from './people/ramze-barataia-info/ramze-barataia-info.component';
import { SulkhanSabaInfoComponent } from './people/sulkhan-saba-info/sulkhan-saba-info.component';
import { IvaneMachabeliInfoComponent } from './people/ivane-machabeli-info/ivane-machabeli-info.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    AboutComponent,
    RiddlesComponent,
    PeopleComponent,
    TutorialComponent,
    SulkhanMachabeliRiddleComponent,
    DavitKakabadzeRiddleComponent,
    GiorgiMazniashviliRiddleComponent,
    RamzeBarataiaRiddleComponent,
    NikoNikoladzeRiddleComponent,
    DavitKakabadzeInfoComponent,
    GiorgiMazniashviliInfoComponent,
    NikoNikoladzeInfoComponent,
    RamzeBarataiaInfoComponent,
    SulkhanSabaInfoComponent,
    IvaneMachabeliInfoComponent
  ],
  imports: [CommonModule, RouterModule,SharedModule,TooltipModule,ReactiveFormsModule,FormsModule,TranslateModule],
  exports: [HeaderComponent, FooterComponent, MenuComponent, AboutComponent,TutorialComponent],
})
export class HomeModule {}
