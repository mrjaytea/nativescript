import { Component, OnInit, Inject } from "@angular/core";
import { QualificationsService } from '../services/qualificaions.service';
import { baseUrl } from '../shared/baseUrl';
import { Qualifications } from '../shared/qualifications';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: "ns-qualifications",
    styleUrls: ["./qualifications.component.css"],
    templateUrl: "./qualifications.component.html"
})
export class QualificationsComponent implements OnInit {
    constructor(private qualificationsService: QualificationsService, @Inject('baseUrl') private baseUrl,private routerExtensions: RouterExtensions) { }

    qualifications: Qualifications[];
    errMess: string;

    ngOnInit(): void {
        this.qualificationsService.getQualifications()
            .subscribe((quali) => {this.qualifications = quali;}, (error) => {this.errMess = <any>error})
    }

    goBack() {
        // Used for going back to the previous page
        this.routerExtensions.back();
    }
}