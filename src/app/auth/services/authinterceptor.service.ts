import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {PersistenceService} from './persistance.service';
import {switchMap} from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private persistenceService: PersistenceService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.persistenceService.get('accessToken')).pipe(
            switchMap(token => {
                if (token) {
                    request = request.clone({headers: request.headers.set('Authorization', token)});
                }
                return next.handle(request);
            })
        );
    }
}
