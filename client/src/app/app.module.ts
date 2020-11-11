import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyListModule } from './survey-list/survey-list.module';

import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { EditComponent } from './pages/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasePageComponent,
    EditComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SurveyListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
