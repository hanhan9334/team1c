import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource
{
    private survey: Survey [] =
    [
        new Survey(1, 'name1', 'email 1', '2020/11/09'),
        new Survey(2, 'name 1', 'email 2', '2020/11/09'),
        new Survey(3, 'name 3', 'email 3', '2020/11/09'),
        new Survey(4, 'name 1', 'email 4', '2020/11/09'),
        new Survey(5, 'name 5', 'email 5', '2020/11/09'),
        new Survey(6, 'name 7', 'email 6', '2020/11/09'),
        new Survey(7, 'name 7', 'email 7', '2020/11/09'),
        new Survey(8, 'name 8', 'email 8', '2020/11/09'),
        new Survey(9, 'name 7', 'email 9', '2020/11/09'),
        new Survey(10, 'name 7', 'email 10', '2020/11/09'),
        new Survey(11, 'name 11', 'email 11', '2020/11/09'),
        new Survey(12, 'name 12', 'email 12', '2020/11/09'),
        new Survey(13, 'name 13', 'email 13', '2020/11/09'),

    ];
    getSurvey(): Observable<Survey[]>
    {
        return from([this.survey]);
    }
}
