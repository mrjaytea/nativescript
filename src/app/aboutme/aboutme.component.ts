import { Component, OnInit, Inject } from "@angular/core";
import { AboutMeService } from '../services/aboutme.service';
import { baseUrl } from '../shared/baseUrl';
import { About } from '../shared/aboutme';
import { Hobbies } from '../shared/hobbies'
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-aboutme",
    styleUrls: ["./aboutme.component.css"],
    templateUrl: "./aboutme.component.html"
})
export class AboutMeComponent implements OnInit {
    constructor(private aboutmeService: AboutMeService, @Inject('baseUrl') private baseUrl, private routerExtensions: RouterExtensions) { }

    about: About;
    hobbies: Hobbies[];
    errMess: string;

    ngOnInit(): void {
        this.aboutmeService.getAboutMe()
            .subscribe(about => {this.about = about; this.hobbies = about.hobbies;}, error => {this.errMess = <any>error})
    }

    goBack() {
        // Used for going back to the previous page
        this.routerExtensions.back();
    }
}
