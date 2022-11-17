import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'auth-login',
    templateUrl: 'login.component.html'
})

export class AuthLogin implements OnInit {
    constructor(
        private form: FormBuilder,
        private authService: AuthService
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
        this.authService.login(this.loginForm.value).subscribe({
            next: data => {
                console.log(data);
            },
            error: err => {
            }
        });
    }
}