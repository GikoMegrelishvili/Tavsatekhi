import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home.component';
import { DavitKakabadzeInfoComponent } from './home/people/davit-kakabadze-info/davit-kakabadze-info.component';
import { GiorgiMazniashviliInfoComponent } from './home/people/giorgi-mazniashvili-info/giorgi-mazniashvili-info.component';
import { IvaneMachabeliInfoComponent } from './home/people/ivane-machabeli-info/ivane-machabeli-info.component';
import { NikoNikoladzeInfoComponent } from './home/people/niko-nikoladze-info/niko-nikoladze-info.component';
import { PeopleComponent } from './home/people/people.component';
import { RamzeBarataiaInfoComponent } from './home/people/ramze-barataia-info/ramze-barataia-info.component';
import { SulkhanSabaInfoComponent } from './home/people/sulkhan-saba-info/sulkhan-saba-info.component';
import { DavitKakabadzeRiddleComponent } from './home/riddles/davit-kakabadze-riddle/davit-kakabadze-riddle.component';
import { GiorgiMazniashviliRiddleComponent } from './home/riddles/giorgi-mazniashvili-riddle/giorgi-mazniashvili-riddle.component';
import { NikoNikoladzeRiddleComponent } from './home/riddles/niko-nikoladze-riddle/niko-nikoladze-riddle.component';
import { RamzeBarataiaRiddleComponent } from './home/riddles/ramze-barataia-riddle/ramze-barataia-riddle.component';
import { RiddlesComponent } from './home/riddles/riddles.component';
import { SulkhanMachabeliRiddleComponent } from './home/riddles/sulkhan-machabeli-riddle/sulkhan-machabeli-riddle.component';
import { TutorialComponent } from './home/tutorial/tutorial.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: TutorialComponent },
      { path: 'about', component: AboutComponent },
      { path: 'riddles', component: RiddlesComponent },
      {
        path: 'riddles/dmxqRsxlf87Sgelash5',
        component: NikoNikoladzeRiddleComponent,
      },
      {
        path: 'riddles/1smxVslZghiwqlsdmxz',
        component: SulkhanMachabeliRiddleComponent,
      },
      {
        path: 'riddles/dxoqwjnJgiko9szxz22',
        component: DavitKakabadzeRiddleComponent,
      },
      {
        path: 'riddles/xmxzGisKNBz25q6z30x',
        component: GiorgiMazniashviliRiddleComponent,
      },
      {
        path: 'riddles/XkZKuxiXbn1245684zv',
        component: RamzeBarataiaRiddleComponent,
      },
      { path: 'people', component: PeopleComponent },
      { path: 'people/niko-nikoladze', component: NikoNikoladzeInfoComponent },
      { path: 'people/ivane-machabeli', component: IvaneMachabeliInfoComponent },
      { path: 'people/sulkhan-saba-orbeliani', component: SulkhanSabaInfoComponent },
      { path: 'people/giorgi-mazniashvili', component:GiorgiMazniashviliInfoComponent  },
      { path: 'people/ramze-barataia', component: RamzeBarataiaInfoComponent },
      { path: 'people/davit-kakabadze', component: DavitKakabadzeInfoComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
