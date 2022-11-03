import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()

export class RequestInterceptorService implements HttpInterceptor {
    
    constructor(
    
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.includes('/assets/i18n')) {
            return next.handle(req)
        }

        return next.handle(req).pipe(
            catchError(err => {
                if ([401, 403, 423].includes(err.status)) {
                    //force logout
                }
                return throwError(err)
            })
        )
    }
}