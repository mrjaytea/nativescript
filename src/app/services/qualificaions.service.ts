import { Injectable } from '@angular/core';
import { Qualifications } from '../shared/qualifications';
import { ProcessHttpMsgService } from './process-httpmsg.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../shared/baseUrl';

@Injectable({
    providedIn: 'root'
})

export class QualificationsService{
    constructor(private http: HttpClient, private processHttpMsgService: ProcessHttpMsgService) {}

    getQualifications(): Observable<Qualifications[]>{
        return this.http.get<Qualifications[]>(baseUrl + 'qualifications')
            .pipe(catchError(this.processHttpMsgService.handleError));
    }
}