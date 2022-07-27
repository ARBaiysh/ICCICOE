import {AppStateInterface} from '../../appState.interface';
import {AuthStateInterface} from '../types/authState.interface';
import {createSelector} from '@ngrx/store';


export const authFeatureSelector = (state: AppStateInterface): AuthStateInterface => state.auth;

// login
export const isSubmittingLoginSelector = createSelector(authFeatureSelector,
    (authState: AuthStateInterface) => authState.isSubmittingLogin
);

export const isLoggedInLoginSelector = createSelector(authFeatureSelector,
    (authState: AuthStateInterface) => authState.isLoggedInLogin
);

export const responseLoginSelector = createSelector(authFeatureSelector,
    (authState: AuthStateInterface) => authState.responseLogin
);

export const backendErrorsLoginSelector = createSelector(authFeatureSelector,
    (authState: AuthStateInterface) => authState.backendErrorsLogin
);


//register
export const isSubmittingRegisterSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isSubmittingRegister
);

export const isLoggedInRegisterSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isLoggedInRegister
);

export const responseRegisterSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.responseRegister
);

export const backendErrorsRegisterSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.backendErrorsRegister
);

