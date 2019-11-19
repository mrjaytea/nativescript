import { Injectable } from '@angular/core';
import { throwError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ProcessHttpMsgService {
    constructor() {}

    public handleError(error: HttpErrorResponse | any) {
        let errMsg: string;

        if (error.error instanceof Response) {
            errMsg = error.error.message;
        } else {
            errMsg = `${error.status} - ${error.statusText || ''} ${error.message}`;
        }
        return throwError(errMsg);
    }
}