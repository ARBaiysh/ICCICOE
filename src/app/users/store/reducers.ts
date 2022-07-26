import {Action, createReducer, on} from '@ngrx/store';
import {UserStateInterface} from '../types/userState.interface';
import {getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction} from './actions/getCurrentUser.action';


const initialState: UserStateInterface = {
    isSubmitting: false,
    isLoggedIn: null,
    currentUser: null,
};

const userReducer = createReducer(
    initialState,
//currentUser-----------------------------------------------------
    on(getCurrentUserAction, (state): UserStateInterface => ({
            ...state,
            isSubmitting: true,
            isLoggedIn: null,
            currentUser: null,
        })
    ),
    on(getCurrentUserSuccessAction,
        (state, action): UserStateInterface => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            currentUser: action.currentUser,
        })
    ),
    on(getCurrentUserFailureAction, (state): UserStateInterface => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: false,
            currentUser: null,
        })
    )
);

export function reducers(state: UserStateInterface, action: Action) {
    return userReducer(state, action);
}
