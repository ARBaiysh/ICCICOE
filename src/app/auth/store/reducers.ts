import {Action, createReducer, on} from '@ngrx/store';
import {AuthStateInterface} from '../types/authState.interface';
import {loginAction, loginFailureAction, loginSuccessAction} from './actions/login.action';
import {logoutAction} from './actions/logout.action';
import {registerAction, registerFailureAction, registerSuccessAction} from './actions/register.action';


const initialState: AuthStateInterface = {
    isSubmittingLogin: false,
    isLoggedInLogin: null,
    responseLogin: null,
    backendErrorsLogin: null,

    isSubmittingRegister: false,
    isLoggedInRegister: null,
    responseRegister: null,
    backendErrorsRegister: null,
};

const authReducer = createReducer(
    initialState,
//login-----------------------------------------------------
    on(loginAction, (state): AuthStateInterface => ({
            ...state,
            isSubmittingLogin: true,
            isLoggedInLogin: null,
            responseLogin: null,
            backendErrorsLogin: null,
        })
    ),
    on(loginSuccessAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmittingLogin: false,
            isLoggedInLogin: true,
            responseLogin: action.response,
            backendErrorsLogin: null,
        })
    ),
    on(loginFailureAction, (state, action): AuthStateInterface => ({
            ...state,
            isSubmittingLogin: false,
            isLoggedInLogin: false,
            responseLogin: null,
            backendErrorsLogin: action.backendError,
        })
    ),
    // logout
    on(logoutAction, (state): AuthStateInterface => ({
            ...state,
            ...initialState,
        })
    ),
    // register
    on(registerAction, (state): AuthStateInterface => ({
            ...state,
            isSubmittingRegister: true,
            isLoggedInRegister: null,
            responseRegister: null,
            backendErrorsRegister: null,
        })
    ),
    on(registerSuccessAction, (state, action): AuthStateInterface => ({
            ...state,
            isSubmittingRegister: false,
            isLoggedInRegister: true,
            responseRegister: action.response,
            backendErrorsRegister: null,
        })
    ),
    on(registerFailureAction, (state, action): AuthStateInterface => ({
            ...state,
            isSubmittingRegister: false,
            isLoggedInRegister: false,
            responseRegister: null,
            backendErrorsRegister: action.backendError,
        })
    ),
);

export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}
