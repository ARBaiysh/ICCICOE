import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {MetringPointService} from '../../service/metringPoint.service';
import {
    createControlReadingAction,
    createControlReadingFailureAction,
    createControlReadingSuccessAction
} from '../actions/createControlReading.action';
import {MessageResponseInterface} from '../../types/messageResponse.interface';


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

    constructor(private actions$: Actions, private metringPointService: MetringPointService) {
    }
}
