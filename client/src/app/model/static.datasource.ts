import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource
{
    private survey: Survey [] =
    [
        new Survey(1, 'name1', ['email 1']),
        new Survey(2, 'name 1', ['email 2']),
        new Survey(3, 'name 3', ['email 3']),
        new Survey(4, 'name 1', ['email 4']),
        new Survey(5, 'name 5', ['email 5']),
        new Survey(6, 'name 7', ['email 6']),
        new Survey(7, 'name 7', ['email 7']),
        new Survey(8, 'name 8', ['email 8']),
        new Survey(9, 'name 7', ['email 9']),
        new Survey(10, 'name 7', ['email 10']),
        new Survey(11, 'name 11', ['email 11']),
        new Survey(12, 'name 12', ['email 12']),
        new Survey(13, 'name 13', ['email 13']),

    ];
    getSurvey(): Observable<Survey[]>
    {
        return from([this.survey]);
    }
}
