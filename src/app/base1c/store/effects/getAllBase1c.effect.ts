import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Base1cService} from '../../service/base1c.service';
import {getAllBases1cAction, getAllBases1cFailureAction, getAllBases1cSuccessAction} from '../actions/getAllBase1c.action';
import {Base1cInterface} from '../../../users/types/base1cInterface';


@Injectable()
export class GetAllBase1cEffect {
    getAllBase1$ = createEffect(() => this.actions$.pipe(
            ofType(getAllBases1cAction),
            switchMap(() => this.base1cService.getAllBase1c().pipe(
                map((base1cList: Base1cInterface[]) => getAllBases1cSuccessAction({base1cList})),
                catchError(() => of(getAllBases1cFailureAction()))
            ))
        )
    );

    constructor(
        private actions$: Actions,
        private base1cService: Base1cService,
    ) {
    }
}
