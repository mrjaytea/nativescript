import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { Skills } from '../shared/skills';
import { SkillsService } from "../services/skills.service"
import { RouterExtensions } from "nativescript-angular/router";

import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { baseUrl } from '../shared/baseUrl'

@Component({
    selector: "ns-skill",
    styleUrls: ["./skill.component.css"],
    templateUrl: "./skill.component.html"
})
export class SkillComponent implements OnInit {
    
    constructor(private skillsService: SkillsService, @Inject('baseUrl') private baseUrl, private route: ActivatedRoute, private routerExtensions: RouterExtensions) { }

    skill: Skills;
    errMess: string;
    isBusy: boolean = true;

    ngOnInit(): void {
        this.route.params
            .pipe(switchMap((params: Params) => this.skillsService.getSkill(params['id'])))
            .subscribe(skill => this.skill = skill, error => this.errMess = <any>error)
    }

    ngAfterViewInit(){
        console.log(this.isBusy);
        setTimeout(()=>{
            this.isBusy = false;
            console.log(this.isBusy);
        }, 4000);
    }

    goBack() {
        // Used for going back to the previous page
        this.routerExtensions.back();
    }
}
