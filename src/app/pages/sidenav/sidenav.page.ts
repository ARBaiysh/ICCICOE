import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {logoutAction} from '../../auth/store/actions/logout.action';
import {Observable} from 'rxjs';
import {CurrentUserInterface} from '../../users/types/currentUser.interface';
import {currentUserSelector, isLoggedInSelector, isSubmittingSelector} from '../../users/store/selectors';
import {getCurrentUserAction} from '../../users/store/actions/getCurrentUser.action';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.page.html',
    styleUrls: ['./sidenav.page.scss'],
})
export class SidenavPage implements OnInit {
    currentUser$: Observable<CurrentUserInterface | null>;
    isSubmitting$: Observable<boolean>;
    isLoggedIn$: Observable<boolean | null>;

    constructor(private store: Store) {
    }

    onExit(): void {
        this.store.dispatch(logoutAction());
    }

    ngOnInit() {
        this.store.dispatch(getCurrentUserAction());
        this.initializeValues();
    }

    private initializeValues() {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        this.currentUser$ = this.store.pipe(select(currentUserSelector));
        this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));

    }


}
