import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'auth-register',
    templateUrl: 'register.component.html'
})

export class AuthRegister implements OnInit {
    constructor(
        private form: FormBuilder
    ) {

    }

    registerForm = this.form.group({
        username: [null, Validators.required],
        email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        password: [null, Validators.required]
    })

    ngOnInit(): void {
        
    }

    public sendRegistration() {
        console.log(this.registerForm)
    }
}