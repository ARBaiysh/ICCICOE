import {Action, createReducer, on} from '@ngrx/store';
import {ControlReadingStateInterface} from '../types/controlReadingState.interface';
import {
    getControlReadingListAction,
    getControlReadingListFailureAction,
    getControlReadingListSuccessAction
} from './actions/getControlReadingList.action';

import {
    createControlReadingAction,
    createControlReadingFailureAction,
    createControlReadingSuccessAction
} from './actions/createControlReading.action';


const initialStateCR: ControlReadingStateInterface = {
    isSubmittingCR: false,
    isLoggedInCR: null,

    controlReadingList: null,
    messageResponse: null,
};

const controlReadingReducer = createReducer(
    initialStateCR,
//createControlReading-----------------------------------------------------
    on(createControlReadingAction, (state): ControlReadingStateInterface => ({
            ...state,
            isSubmittingCR: true,
            isLoggedInCR: null,
            messageResponse: null,
        })
    ),
    on(createControlReadingSuccessAction, (state, action): ControlReadingStateInterface => ({
            ...state,
            isSubmittingCR: false,
            isLoggedInCR: true,
            messageResponse: action.messageResponse,
        })
    ),
    on(createControlReadingFailureAction, (state): ControlReadingStateInterface => ({
            ...state,
            isSubmittingCR: false,
            isLoggedInCR: false,
            messageResponse: null,
        })
    ),
//getControlReadingList-----------------------------------------------------
    on(getControlReadingListAction, (state): ControlReadingStateInterface => ({
            ...state,
            isSubmittingCR: true,
            isLoggedInCR: null,
            controlReadingList: null
        })
    ),
    on(getControlReadingListSuccessAction, (state, action): ControlReadingStateInterface => ({
            ...state,
            isSubmittingCR: false,
            isLoggedInCR: true,
            controlReadingList: action.controlReadingList
        })
    ),
    on(getControlReadingListFailureAction, (state): ControlReadingStateInterface => ({
            ...state,
            isSubmittingCR: false,
            isLoggedInCR: false,
            controlReadingList: null
        })
    ),
);

export function reducers(state: ControlReadingStateInterface, action: Action) {
    return controlReadingReducer(state, action);
}
