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
  public surveyPerPage = 4;
  public selectedPage = 1;


  constructor(private repository: SurveyRepository) { }

  get surveys(): Survey[]
  {
    const pageIndex = (this.selectedPage -1) * this.surveyPerPage;
    return this.repository.getSurveys(this.selectedName)
    .slice(pageIndex, pageIndex + this.surveyPerPage);
  }
  get names(): string[]
  {
    return this.repository.getNames();
  }
  changeName(newName?: string): void{
    this.selectedName = newName;
  }
  changePage(newPage: number): void
  {
    this.selectedPage = newPage;
  }
  changePageSize(newSize: number): void 
  {
    this.surveyPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageNumbers(): number[]
  {
    return Array(Math.ceil(this.repository
      .getSurveys(this.selectedName).length / this.surveyPerPage))
      .fill(0).map((x, i) => i + 1);
  }
}
