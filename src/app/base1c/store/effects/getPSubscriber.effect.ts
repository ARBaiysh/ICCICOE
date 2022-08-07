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
import { getPSubscriberAction, getPSubscriberFailureAction, getPSubscriberSuccessAction } from '../actions/getPSubscriber.action';
import { PSubscriberEntityInterface } from '../../types/pSubscriberEntity.interface';


@Injectable()
export class GetPSubscriberEffect {
    getPSubscriber$ = createEffect(() => this.actions$.pipe(
            ofType(getPSubscriberAction),
            switchMap(({lsPorm}) => this.base1cService.getPSubscribersByLsProm(lsPorm).pipe(
                map((pSubscriber: PSubscriberEntityInterface) => getPSubscriberSuccessAction({pSubscriber})),
                catchError(() => of(getPSubscriberFailureAction()))
            ))
        )
    );

    constructor(private actions$: Actions, private base1cService: Base1cService) {
    }
}
