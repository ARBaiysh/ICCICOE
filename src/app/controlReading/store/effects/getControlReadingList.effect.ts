import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {
    getControlReadingListAction,
    getControlReadingListFailureAction,
    getControlReadingListSuccessAction
} from '../actions/getControlReadingList.action';
import {MetringPointService} from '../../service/metringPoint.service';
import {ControlReadingInterface} from '../../types/controlReading.interface';


@Injectable()
export class GetControlReadingListEffect {
    getControlReadingList$ = createEffect(() => this.actions$.pipe(
            ofType(getControlReadingListAction),
            switchMap(({lsMeteringPoint}) => this.metringPointService.getControlReadingList(lsMeteringPoint).pipe(
                map((controlReadingList: ControlReadingInterface[]) => getControlReadingListSuccessAction({controlReadingList})),
                catchError(() => of(getControlReadingListFailureAction()))
            ))
        )
    );

    constructor(private actions$: Actions, private metringPointService: MetringPointService) {
    }
}
