import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { QualificationsComponent } from "./qualifications/qualifications.component";
import { SkillsComponent } from "./skills/skills.component";
import { SkillComponent } from "./skill/skill.component";
import { AboutMeComponent } from "./aboutme/aboutme.component";
import { MetronomeComponent } from "./metronome/metronome.component";

const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "qualifications", component: QualificationsComponent },
    { path: "skills", component: SkillsComponent },
    { path: "skill/:id", component: SkillComponent },
    { path: "aboutme", component: AboutMeComponent },
    { path: "metronome", component: MetronomeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
