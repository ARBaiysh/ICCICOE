import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {of} from 'rxjs';
import {loginAction, loginFailureAction, loginSuccessAction} from '../actions/login.action';
import {LoginResponseInterface} from '../../types/loginResponseInterface';
import {AuthService} from '../../services/auth.service';
import {PersistenceService} from '../../services/persistance.service';
import {Store} from '@ngrx/store';


@Injectable()
export class LoginEffect {
    login$ = createEffect(() => this.actions$.pipe(
            ofType(loginAction),
            switchMap(({request}) => this.authService.login(request).pipe(
                map((response: LoginResponseInterface) => {
                    this.persistenceService.set('accessToken', response.token);
                    return loginSuccessAction({response});
                }),
                catchError((errorResponse: HttpErrorResponse) => of(loginFailureAction({backendError: errorResponse.error})))
            ))
        )
    );

    redirectAfterSubmit$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(loginSuccessAction),
                tap(() => {
                    this.router.navigateByUrl('/nav/about');
                })
            ),
        {dispatch: false}
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistenceService: PersistenceService,
        private router: Router
    ) {
    }
}
