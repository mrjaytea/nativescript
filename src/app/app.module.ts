import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { QualificationsComponent } from "./qualifications/qualifications.component";
import { SkillsComponent } from "./skills/skills.component";
import { SkillComponent } from "./skill/skill.component";
import { AboutMeComponent } from "./aboutme/aboutme.component";
import { QuoteComponent } from "./quote/quote.component";
import { MetronomeComponent } from "./metronome/metronome.component";

import { HttpClientModule } from '@angular/common/http'
import { AboutMeService } from './services/aboutme.service'
import { SkillsService } from "./services/skills.service"
import { QualificationsService } from "./services/qualificaions.service"

import { NativeScriptBottomNavigationBarModule } from "nativescript-bottom-navigation/angular";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { ModalDialogService } from "nativescript-angular/modal-dialog";

import { baseUrl } from "./shared/baseUrl";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptBottomNavigationBarModule,
        HttpClientModule,
        TNSFontIconModule.forRoot({
            'fa': './fonts/font-awesome.min.css'
        })
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        QualificationsComponent,
        SkillsComponent,
        SkillComponent,
        AboutMeComponent,
        MetronomeComponent,
        QuoteComponent
    ],
    providers: [
        {provide: 'baseUrl', useValue: baseUrl},
        AboutMeService,
        SkillsService,
        QualificationsService,
        ModalDialogService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents:[
        QuoteComponent
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
