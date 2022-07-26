import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {MetringPointService} from '../../service/metringPoint.service';
import {createControlReadingAction, createControlReadingFailureAction, createControlReadingSuccessAction} from '../actions/createControlReading.action';
import {MessageResponseInterface} from '../../types/messageResponse.interface';
import {getCurrentUserFailureAction} from '../../../users/store/actions/getCurrentUser.action';
import {Store} from '@ngrx/store';
import {getControlReadingListAction} from '../actions/getControlReadingList.action';


@Injectable()
export class CreateControlReadingEffect {
    createControlReading$ = createEffect(() => this.actions$.pipe(
            ofType(createControlReadingAction),
            switchMap(({controlReadingRequest}) => this.metringPointService.createControlReading(controlReadingRequest).pipe(
                map((messageResponse: MessageResponseInterface) => createControlReadingSuccessAction({messageResponse})),
                catchError(() => of(createControlReadingFailureAction()))
            ))
        )
    );
    logout$ = createEffect(() => this.actions$.pipe(
            ofType(createControlReadingSuccessAction),
            tap(() => {
                this.store.dispatch(getControlReadingListAction({lsMeteringPoint: this.metringPointService.getLsMeteringPoint()}));
            })
        ),
        {dispatch: false}
    );

    constructor(private actions$: Actions, private metringPointService: MetringPointService, private store: Store) {
    }
}
