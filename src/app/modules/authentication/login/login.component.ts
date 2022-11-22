import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AuthService } from "src/app/services/auth.service";
import { SessionService } from "src/app/services/session.service";

import { LoginResponse } from "src/app/models/interfaces";

@Component({
    selector: 'auth-login',
    templateUrl: 'login.component.html'
})

export class AuthLogin implements OnInit {
    constructor(
        private form: FormBuilder,
        private auth: AuthService,
        private session: SessionService
    ) {

    }

    loginForm = this.form.group({
        identifier: [null, Validators.required],
        password: [null, Validators.required]
    })

    ngOnInit(): void {
        
    }

    public sendLogin() {
        console.log(this.loginForm.value)
        this.auth.login(this.loginForm.value).subscribe({
            next: (response: LoginResponse) => {
                this.session.user = response.user;
                // redirect
            },
            error: err => {
                console.log(err)
            }
        });
    }
}