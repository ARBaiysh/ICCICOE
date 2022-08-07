import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Base1cService} from '../../service/base1c.service';
import {
    getNextPSubscribersAction,
    getNewPSubscribersAction,
    getPSubscribersFailureAction,
    getPSubscribersSuccessAction, getSearchPSubscribersAction
} from '../actions/getPSubscribers.action';
import {PSubscriberInterface} from '../../types/pSubscriber.interface';


@Injectable()
export class GetPSubscribersEffect {
    getNewPSubscribers$ = createEffect(() => this.actions$.pipe(
            ofType(getNewPSubscribersAction),
            switchMap(({base1c, offset}) => this.base1cService.getPSubscribers(base1c, offset).pipe(
                map((pSubscriberList: PSubscriberInterface[]) => getPSubscribersSuccessAction({pSubscriberList})),
                catchError(() => of(getPSubscribersFailureAction()))
            ))
        )
    );

    getNextPSubscribers$ = createEffect(() => this.actions$.pipe(
            ofType(getNextPSubscribersAction),
            switchMap(({base1c, offset}) => this.base1cService.getPSubscribers(base1c, offset).pipe(
                map((pSubscriberList: PSubscriberInterface[]) => getPSubscribersSuccessAction({pSubscriberList})),
                catchError(() => of(getPSubscribersFailureAction()))
            ))
        )
    );

    getPSubscribersSearch$ = createEffect(() => this.actions$.pipe(
            ofType(getSearchPSubscribersAction),
            switchMap(({base1c, searchLine}) => this.base1cService.getPSubscribersSearch(base1c, searchLine).pipe(
                map((pSubscriberList: PSubscriberInterface[]) => getPSubscribersSuccessAction({pSubscriberList})),
                catchError(() => of(getPSubscribersFailureAction()))
            ))
        )
    );

    constructor(private actions$: Actions, private base1cService: Base1cService) {
    }
}
