import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserInterface } from '../../types/userInterface';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { updateUserAction, updateUserFailureAction, updateUserSuccessAction } from '../actions/updateUser.action';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class UpdateUsersEffect {
  updateUsers$ = createEffect(() => this.actions$.pipe(
      ofType(updateUserAction),
      switchMap(( {userUpdateRequest} ) => this.userService.updateUser(userUpdateRequest).pipe(
        map(( userResponse: UserInterface ) => updateUserSuccessAction({userResponse})),
        catchError(( errorResponse: HttpErrorResponse ) => of(updateUserFailureAction({updateBackendErrorsResponse: errorResponse.error})))
      ))
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateUserAction),
        tap(() => {
          this.router.navigateByUrl('/nav/user-list');
        })
      ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router
  ) {
  }
}
