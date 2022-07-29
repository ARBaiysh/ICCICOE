import {Action, createReducer, on} from '@ngrx/store';
import {Base1cStateInterface} from '../types/base1cState.interface';
import {getAllBases1cAction, getAllBases1cFailureAction, getAllBases1cSuccessAction} from './actions/getAllBase1c.action';


const initialState: Base1cStateInterface = {
    isSubmittingGetAllBase1c: false,
    isLoggedInGetAllBase1c: null,
    base1cList: null,
};

const base1cReducer = createReducer(
    initialState,
//getAllBase1c-----------------------------------------------------
    on(getAllBases1cAction, (state): Base1cStateInterface => ({
            ...state,
        isSubmittingGetAllBase1c: true,
        isLoggedInGetAllBase1c: null,
        base1cList: null,
        })
    ),
    on(getAllBases1cSuccessAction,
        (state, action): Base1cStateInterface => ({
            ...state,
            isSubmittingGetAllBase1c: false,
            isLoggedInGetAllBase1c: true,
            base1cList: action.base1cList,
        })
    ),
    on(getAllBases1cFailureAction, (state): Base1cStateInterface => ({
            ...state,
        isSubmittingGetAllBase1c: false,
        isLoggedInGetAllBase1c: false,
        base1cList: null,
        })
    ),
);


export function reducers(state: Base1cStateInterface, action: Action) {
    return base1cReducer(state, action);
}
