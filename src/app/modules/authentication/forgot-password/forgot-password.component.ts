import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'auth-forgot-password',
    templateUrl: 'forgot-password.component.html'
})

export class AuthForgotPassword implements OnInit {
    constructor(
        private form: FormBuilder
    ) {

    }

    forgotPasswordForm = this.form.group({
        email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    })

    ngOnInit(): void {
        
    }

    public sendForgotPasswordForm() {
        console.log(this.forgotPasswordForm)
    }
}