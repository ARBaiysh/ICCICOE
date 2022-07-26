import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { logoutAction } from '../../auth/store/actions/logout.action';
import { Observable } from 'rxjs';
import { UserInterface } from '../../users/types/userInterface';
import { currentUserSelector, isLoggedInCurrentUserSelector, isSubmittingCurrentUserSelector } from '../../users/store/selectors';
import { getCurrentUserAction } from '../../users/store/actions/getCurrentUser.action';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.page.html',
  styleUrls: ['./sidenav.page.scss'],
})
export class SidenavPage implements OnInit {
  isSubmittingCurrentUser$: Observable<boolean>;
  isLoggedInCurrentUser$: Observable<boolean | null>;
  currentUser$: Observable<UserInterface | null>;

  active = '';

  navs = [
    {
      name: 'Users',
      link: '/nav/users-list',
      icon: 'list-outline'
    },
    {
      name: 'About',
      link: '/nav/about',
      icon: 'person-circle'
    },
    {
      name: 'Blog',
      link: '/nav/blog',
      icon: 'albums'
    },
    {
      name: 'Contact',
      link: '/nav/contact',
      icon: 'call'
    }
  ];

  constructor( private store: Store, private router: Router ) {
    this.router.events.subscribe(( event: RouterEvent ) => {
      this.active = event.url;
    });
  }

  onExit(): void {
    this.store.dispatch(logoutAction());
  }

  ngOnInit() {
    this.store.dispatch(getCurrentUserAction());
    this.initializeValues();
  }

  private initializeValues() {
    this.isSubmittingCurrentUser$ = this.store.pipe(select(isSubmittingCurrentUserSelector));
    this.isLoggedInCurrentUser$ = this.store.pipe(select(isLoggedInCurrentUserSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));

  }


}
