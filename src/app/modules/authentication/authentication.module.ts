import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { TranslationModule } from "src/app/shared/translation/translation.module";

import { AuthLogin } from "./login/login.component";

const routes: Routes = [
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TranslationModule,
        TranslateModule
    ],
    declarations: [
        AuthLogin
    ],
    schemas: [NO_ERRORS_SCHEMA]
})

export class AuthenticationModule { }