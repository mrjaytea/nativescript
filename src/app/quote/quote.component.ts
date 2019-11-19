import { Component, OnInit, Inject } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { baseUrl } from '../shared/baseUrl';

@Component({
    selector: 'ns-quote',
    templateUrl: 'quote.component.html',
    styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
    constructor(@Inject('baseUrl') private baseUrl, private modalDialogParams: ModalDialogParams) { }

    ngOnInit() { }

    closeQuote(){
        this.modalDialogParams.closeCallback("");
    }

}