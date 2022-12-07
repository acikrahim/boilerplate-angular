import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'auth-change-password',
    templateUrl: 'change-password.component.html'
})

export class AuthChangePassword implements OnInit {
    constructor(
        private form: FormBuilder
    ) {

    }

    changePasswordForm = this.form.group({
        password: [null, Validators.required],
        currentPassword: [null, Validators.required],
        confirmPassword: [null, Validators.required]
    })

    ngOnInit(): void {
        
    }

    public sendChangePasswordForm() {
        console.log(this.changePasswordForm)
    }
}