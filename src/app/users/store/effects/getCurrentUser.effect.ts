import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction} from '../actions/getCurrentUser.action';
import {UserInterface} from '../../types/userInterface';
import {logoutAction} from '../../../auth/store/actions/logout.action';
import {UserService} from '../../services/user.service';
import {PersistenceService} from '../../../auth/services/persistance.service';


@Injectable()
export class GetCurrentUserEffect {
    getCurrentUser$ = createEffect(() => this.actions$.pipe(
            ofType(getCurrentUserAction),
            switchMap(() => {
                const token = this.persistenceService.get('accessToken');
                if (!token) {
                    return of(getCurrentUserFailureAction());
                };
                return this.userService.getCurrentUser().pipe(
                    map((currentUser: UserInterface) => getCurrentUserSuccessAction({currentUser})),
                    catchError(() => of(getCurrentUserFailureAction(), logoutAction()))
                );
            })
        )
    );

    constructor(
        private actions$: Actions,
        private userService: UserService,
        private persistenceService: PersistenceService,
    ) {
    }
}
