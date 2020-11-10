import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class SurveyRepository
{
    private surveys: Survey[] = [];
    private names: string[] = [];

    constructor(private datasource: StaticDataSource)
    {
        datasource.getSurvey().subscribe(data => {
            this.surveys = data;
            this.names= data.map(s => s.name)
                .filter((n, index, array) => array.indexOf(n) === index).sort();
        });
    }
    getSurveys(name: string = null): Survey[]
    {
        return this.surveys
            .filter(s => name == null || name === s.name);
    }
    getSurvey(id: number): Survey
    {
        return this.surveys.find(s => s._id === id);
    }

    getNames(): string[]
    {
        return this.names;
    }
}