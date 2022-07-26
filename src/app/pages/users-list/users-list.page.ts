import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../../users/types/userInterface';
import { select, Store } from '@ngrx/store';
import { getAllUsersAction } from '../../users/store/actions/getAllUsers.action';
import { isLoggedInAllUsersSelector, isSubmittingAllUsersSelector, usersListSelector } from '../../users/store/selectors';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {

  isSubmittingAllUsersUser$: Observable<boolean>;
  isLoggedInAllUsers$: Observable<boolean | null>;
  usersList$: Observable<UserInterface[] | null>;
  searchTerm: string;

  public isShown = [];

  constructor( private store: Store ) {
  }

  ngOnInit() {
    this.store.dispatch(getAllUsersAction());
    this.initializeValues();
  }

  itemTapped( index ) {
    this.isShown[index] = !this.isShown[index];
  }

  doRefresh( $event: any ) {
    this.store.dispatch(getAllUsersAction());
    $event.target.complete();
  }

  private initializeValues() {
    this.isSubmittingAllUsersUser$ = this.store.pipe(select(isSubmittingAllUsersSelector));
    this.isLoggedInAllUsers$ = this.store.pipe(select(isLoggedInAllUsersSelector));
    this.usersList$ = this.store.pipe(select(usersListSelector));
  }


}
