import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";
import { QuoteComponent } from "../quote/quote.component";

@Component({
    selector: "ns-home",
    styleUrls: ["./home.component.css"],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    constructor(private modalDialogService: ModalDialogService, private viewContainerRef: ViewContainerRef) { }

    ngOnInit(): void {

    }

    openQuote() {
        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            context: {},
            fullscreen: false
        };

        this.modalDialogService.showModal(QuoteComponent, options)
            .then((result: string) => {
                console.log(result);
            });
    }
}
