import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {tap} from 'rxjs/operators';

import {Router} from '@angular/router';
import {logoutAction} from '../actions/logout.action';
import {PersistenceService} from '../../services/persistance.service';
import {Store} from '@ngrx/store';
import {getCurrentUserFailureAction} from '../../../users/store/actions/getCurrentUser.action';


@Injectable()
export class LogoutEffect {
    logout$ = createEffect(() => this.actions$.pipe(
            ofType(logoutAction),
            tap(() => {
                this.persistenceService.removeToken('accessToken');
                this.store.dispatch(getCurrentUserFailureAction());
                this.router.navigateByUrl('');
            })
        ),
        {dispatch: false}
    );

    constructor(
        private store: Store,
        private actions$: Actions,
        private persistenceService: PersistenceService,
        private router: Router
    ) {
    }
}
