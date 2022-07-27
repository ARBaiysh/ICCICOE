import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {of} from 'rxjs';
import {registerAction, registerFailureAction, registerSuccessAction} from '../actions/register.action';
import {RegisterResponseInterface} from '../../types/registerResponse.interface';
import {AuthService} from '../../services/auth.service';



@Injectable()
export class RegisterEffect {
    register$ = createEffect(() => this.actions$.pipe(
            ofType(registerAction),
            switchMap(({request}) => this.authService.register(request).pipe(
                    map((response: RegisterResponseInterface) => registerSuccessAction({response})),
                    catchError((errorResponse: HttpErrorResponse) => of(registerFailureAction({backendError: errorResponse.error})))
                ))
        )
    );

    redirectAfterSubmit$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(registerSuccessAction),
                tap(() => {
                    this.router.navigateByUrl('/nav/users-list');
                })
            ),
        {dispatch: false}
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) {
    }
}
