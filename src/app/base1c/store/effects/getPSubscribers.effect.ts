import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Base1cService } from '../../service/base1c.service';
import { getPSubscribersAction, getPSubscribersFailureAction, getPSubscribersSuccessAction } from '../actions/getPSubscribers.action';
import { PSubscriberInterface } from '../../types/pSubscriber.interface';


@Injectable()
export class GetPSubscribersEffect {
  getPSubscribers$ = createEffect(() => this.actions$.pipe(
      ofType(getPSubscribersAction),
      switchMap(( {base1c, offset} ) => this.base1cService.getPSubscribers(base1c, offset).pipe(
        map(( pSubscriberList: PSubscriberInterface[] ) => getPSubscribersSuccessAction({pSubscriberList})),
        catchError(() => of(getPSubscribersFailureAction()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private base1cService: Base1cService,
  ) {
  }
}
