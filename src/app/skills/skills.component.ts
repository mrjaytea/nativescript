import { Component, OnInit, Inject } from "@angular/core";
import { Skills } from '../shared/skills';
import { SkillsService } from "../services/skills.service"
import { baseUrl } from '../shared/baseUrl'
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-skills",
    styleUrls: ["./skills.component.css"],
    templateUrl: "./skills.component.html"
})
export class SkillsComponent implements OnInit {
    constructor(private skillsService: SkillsService, @Inject('baseUrl') private baseUrl, private routerExtensions: RouterExtensions) { }

    skills: Skills[];
    errMess: string;

    ngOnInit(): void {
        this.skillsService.getSkills()
            .subscribe(skills => this.skills = skills, error => this.errMess = <any>error)
    }

    goBack() {
        // Used for going back to the previous page
        this.routerExtensions.back();
    }
}
