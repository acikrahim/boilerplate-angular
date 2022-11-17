import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'auth-reset-password',
    templateUrl: 'reset-password.component.html'
})

export class AuthResetPassword implements OnInit {
    constructor(
        private form: FormBuilder
    ) {

    }

    resetPasswordForm = this.form.group({
        password: [null, Validators.required],
        confirmPassword: [null, Validators.required]
    })

    ngOnInit(): void {
        
    }

    public sendResetPasswordForm() {
        console.log(this.resetPasswordForm)
    }
}