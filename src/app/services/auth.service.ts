import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginResponse } from '../models/interfaces';

const AUTH_API = 'http://localhost:1337/api/auth/local';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private http: HttpClient
    ) {

    }

    login(loginForm: Object): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(
            AUTH_API,
            loginForm,
            httpOptions
        )
    }

    logout(): Observable<any> {
        return this.http.post(AUTH_API + 'signout', {}, httpOptions);
    }
}