import { Injectable } from '@angular/core';
import { About } from '../shared/aboutme';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { ProcessHttpMsgService } from './process-httpmsg.service';
import { baseUrl } from '../shared/baseUrl';

@Injectable({
    providedIn: 'root'
})

export class AboutMeService{
    constructor(private http:HttpClient, private processHttpMsg: ProcessHttpMsgService) {}

    getAboutMe(): Observable<About>{
        return this.http.get<About>(baseUrl + 'about')
            .pipe(catchError(this.processHttpMsg.handleError));
    }
}