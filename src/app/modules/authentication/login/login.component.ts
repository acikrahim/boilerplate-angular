import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from "src/app/services/auth.service";
import { SessionService } from "src/app/services/session.service";
import { ModalService } from "src/app/services/modal/modal.service";

import { LoginResponse } from "src/app/models/interfaces";

@Component({
    selector: 'auth-login',
    templateUrl: 'login.component.html'
})

export class AuthLogin implements OnInit {

    constructor(
        private form: FormBuilder,
        private auth: AuthService,
        private session: SessionService,
        public router: Router,
        private modal: ModalService,
        private ngbModal: NgbModal
    ) {

    }

    loginForm = this.form.group({
        identifier: [null, Validators.required],
        password: [null, Validators.required]
    })

    ngOnInit(): void {
        
    }

    public sendLoginForm() {
        // this.ngbModal.open(this.modal.getTemplateRef('successModal', { modalTitle: 'test', modalBody: 'test'})?.templateRef).result.then((result) => {
        //     console.log(result)
        //     console.log('result')
        // }, (reason) => {
        //     console.log(reason)
        //     console.log('reason')
        // });
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