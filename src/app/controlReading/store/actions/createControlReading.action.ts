import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {ControlReadingRequestInterface} from '../../types/controlReadingRequest.interface';
import {MessageResponseInterface} from '../../types/messageResponse.interface';


export const createControlReadingAction = createAction(ActionTypes.createControlReading,
    props<{ controlReadingRequest: ControlReadingRequestInterface }>()
);

export const createControlReadingSuccessAction = createAction(ActionTypes.createControlReadingSuccess,
    props<{ messageResponse: MessageResponseInterface }>()
);

export const createControlReadingFailureAction = createAction(ActionTypes.createControlReadingFailure);



