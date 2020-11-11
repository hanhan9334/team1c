import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyListModule } from './survey-list/survey-list.module';
import { PagesModule } from './pages/pages.module';
import { PartialsModule } from './partials/partials.modules';
import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';

export function jwtTokenGetter(): string
{
  return localStorage.getItem('id_token');
}
@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SurveyListModule,
    PagesModule,
    PartialsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
