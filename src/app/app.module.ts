import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AuthorizationComponent } from './landing/authorization/authorization.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './landing/registration/registration.component';
import { HomeModule } from './home/home.module';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { TooltipModule } from 'ng2-tooltip-directive';
import { SharedModule } from './shared/shared.module';
import { NikoNikoladzeRiddleComponent } from './home/riddles/niko-nikoladze-riddle/niko-nikoladze-riddle.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AuthorizationComponent,
    HomeComponent,
    RegistrationComponent,
    NikoNikoladzeRiddleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader:{  
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: "ka",
    }),
    NoopAnimationsModule,
    TooltipModule,
    SharedModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,"./assets/i18n/", ".json");
}