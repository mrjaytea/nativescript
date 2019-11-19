import { Injectable } from '@angular/core';
import { Skills } from '../shared/skills';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { ProcessHttpMsgService } from './process-httpmsg.service';
import { baseUrl } from '../shared/baseUrl';

@Injectable({
    providedIn: 'root'
})

export class SkillsService{
    constructor(private http:HttpClient, private processHttpMsg: ProcessHttpMsgService) {}

    getSkills(): Observable<Skills[]>{
        return this.http.get<Skills[]>(baseUrl + 'skills')
            .pipe(catchError(this.processHttpMsg.handleError));
    }

    getSkill(id: number): Observable<Skills>{
        return this.http.get<Skills>(baseUrl + 'skills/' + id)
            .pipe(catchError(this.processHttpMsg.handleError));
    }
}