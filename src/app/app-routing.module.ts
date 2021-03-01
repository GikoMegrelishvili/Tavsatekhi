import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './home/people/people.component';
import { ProfileComponent } from './home/profile/profile.component';
import { DavitKakabadzeRiddleComponent } from './home/riddles/davit-kakabadze-riddle/davit-kakabadze-riddle.component';
import { GiorgiMazniashviliRiddleComponent } from './home/riddles/giorgi-mazniashvili-riddle/giorgi-mazniashvili-riddle.component';
import { NikoNikoladzeRiddleComponent } from './home/riddles/niko-nikoladze-riddle/niko-nikoladze-riddle.component';
import { RamzeBarataiaRiddleComponent } from './home/riddles/ramze-barataia-riddle/ramze-barataia-riddle.component';
import { RiddlesComponent } from './home/riddles/riddles.component';
import { SulkhanMachabeliRiddleComponent } from './home/riddles/sulkhan-machabeli-riddle/sulkhan-machabeli-riddle.component';
import { TutorialComponent } from './home/tutorial/tutorial.component';
import { AuthorizationComponent } from './landing/authorization/authorization.component';
import { LandingComponent } from './landing/landing.component';
import { RegistrationComponent } from './landing/registration/registration.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { UnderConstructionComponent } from './shared/under-construction/under-construction.component';

const routes: Routes = [
  {
  //   path: '',
  //   component: HomeComponent,
  //   canActivateChild: [AuthGuardService],
  //   canActivate: [AuthGuardService],
  //   children: [
  //     { path: '', component: TutorialComponent },
  //     { path: 'about', component: AboutComponent },
  //     { path: 'riddles', component: RiddlesComponent },
  //     {
  //       path: 'riddles/dmxqRsxlf87Sgelash5',
  //       component: NikoNikoladzeRiddleComponent,
  //     },
  //     {
  //       path: 'riddles/1smxVslZghiwqlsdmxz',
  //       component: SulkhanMachabeliRiddleComponent,
  //     },
  //     {
  //       path: 'riddles/dxoqwjnJgiko9szxz22',
  //       component: DavitKakabadzeRiddleComponent,
  //     },
  //     {
  //       path: 'riddles/xmxzGisKNBz25q6z30x',
  //       component: GiorgiMazniashviliRiddleComponent,
  //     },
  //     {
  //       path: 'riddles/XkZKuxiXbn1245684zv',
  //       component: RamzeBarataiaRiddleComponent,
  //     },
  //     { path: 'people', component: PeopleComponent },
  //     { path: 'profile', component: ProfileComponent },
  //   ],
  // },
  // {
  //   path: 'landing',
  //   component: LandingComponent,
  //   children: [
  //     { path: 'auth', component: AuthorizationComponent },
  //     { path: 'registration', component: RegistrationComponent },
  //   ],
  // },
  // {
  //   path: 'under-construction',
  //   component: UnderConstructionComponent,
  // },


  path: '',
  component: HomeComponent,
  // canActivateChild: [AuthGuardService],
  // canActivate: [AuthGuardService],
  children: [
    // { path: '', component: TutorialComponent },
    // { path: 'about', component: AboutComponent },
    // { path: 'riddles', component: RiddlesComponent },
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
    // { path: 'people', component: PeopleComponent },
    // { path: 'profile', component: ProfileComponent },
  ],
},
{
  path: 'under-construction',
  component: UnderConstructionComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
