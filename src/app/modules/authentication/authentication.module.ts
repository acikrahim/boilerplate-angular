import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FeatherModule } from 'angular-feather';
import { Eye, EyeOff } from 'angular-feather/icons';

import { TranslationModule } from "src/app/shared/translation/translation.module";

import { AuthGuard } from "src/app/guard/auth.guard";

import { AuthenticationComponent } from "./authentication.component";
import { AuthLogin } from "./login/login.component";
import { AuthRegister } from "./register/register.component";
import { AuthForgotPassword } from "./forgot-password/forgot-password.component";
import { AuthResetPassword } from "./reset-password/reset-password.component";
import { AuthChangePassword } from "./change-password/change-password.component";

const routes: Routes = [
    {
        path: '',
        component: AuthenticationComponent,
        children: [
            {
                path: 'login',
                component: AuthLogin
            },
            {
                path: 'register',
                component: AuthRegister
            },
            {
                path: 'forgot-password',
                component: AuthForgotPassword
            },
            {
                path: 'reset-password',
                component: AuthResetPassword,
                canActivate: [AuthGuard]
            },
            {
                path: 'change-password',
                component: AuthChangePassword,
                canActivate: [AuthGuard]
            }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        TranslationModule,
        FeatherModule.pick({
            Eye,
            EyeOff
        }),
    ],
    declarations: [
        AuthenticationComponent,
        AuthLogin,
        AuthRegister,
        AuthForgotPassword,
        AuthResetPassword,
        AuthChangePassword
    ],
    schemas: [NO_ERRORS_SCHEMA]
})

export class AuthenticationModule { }