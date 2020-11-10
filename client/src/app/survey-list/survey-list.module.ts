import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { SurveyListComponent } from './survey-list.component';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [SurveyListComponent],
    exports: [SurveyListComponent] 
})
export class SurveyListModule {}