import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {ControlReadingInterface} from '../../types/controlReading.interface';


export const getControlReadingListAction = createAction(ActionTypes.getControlReadingList,
    props<{ lsMeteringPoint: string }>()
);

export const getControlReadingListSuccessAction = createAction(ActionTypes.getControlReadingListSuccess,
    props<{ controlReadingList: ControlReadingInterface[] }>()
);

export const getControlReadingListFailureAction = createAction(ActionTypes.getControlReadingListFailure);


