import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";

import { SessionService } from "./session.service";

@Injectable()

export class RequestInterceptorService implements HttpInterceptor {
    
    constructor(
        private session: SessionService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url.includes('/assets/i18n')) {
            return next.handle(req)
        }

        if (this.session.isJwtTokenExist) {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + this.session.jwtToken,
                },
            });
        }

        return next.handle(req).pipe(
            catchError(err => {
                if ([401, 403, 423, 400].includes(err.status)) {
                    //force logout
                    console.log('error', err)
                }
                return throwError(err)
            })
        )
    }
}