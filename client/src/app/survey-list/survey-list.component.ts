import { Component } from '@angular/core';
import { Survey } from '../model/survey.model';
import { SurveyRepository } from './../model/survey.repository';
@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent 
{
  public selectedName = null;

  constructor(private repository: SurveyRepository) { }

  get surveys(): Survey[]
  {
    return this.repository.getSurveys(this.selectedName);
  }
  get names(): string[]
  {
    return this.repository.getNames();
  }
  changeName(newName?: string): void{
    this.selectedName = newName;
  }
}
