import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {UserInterface} from '../../types/userInterface';
import {UserService} from '../../services/user.service';
import {getAllUsersAction, getAllUsersFailureAction, getAllUsersSuccessAction} from '../actions/getAllUsers.action';


@Injectable()
export class GetAllUsersEffect {
  getAllUsers$ = createEffect(() => this.actions$.pipe(
      ofType(getAllUsersAction),
      switchMap(() => this.userService.getAllUsers().pipe(
        map(( usersList: UserInterface[] ) => getAllUsersSuccessAction({usersList})),
        catchError(() => of(getAllUsersFailureAction()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) {
  }
}
