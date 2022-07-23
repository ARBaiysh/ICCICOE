import { AppStateInterface } from '../types/appState.interface';
import { AuthStateInterface } from '../types/authState.interface';
import { createSelector } from '@ngrx/store';


export const authFeatureSelector = (state: AppStateInterface): AuthStateInterface => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);

export const backendErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.backendErrors
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn
);


export const isErrorSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isErrors
);

export const loginResponseSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.response
);

