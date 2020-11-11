import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyListComponent } from './survey-list/survey-list.component';

const routes: Routes = [

  {path: 'survey-list', component: SurveyListComponent, data: {title: 'Survey List'}},
  {path: '', redirectTo: '/survey-list', pathMatch: 'full', data: {title: 'Welcome'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
