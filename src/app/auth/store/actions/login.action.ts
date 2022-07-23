import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { LoginRequestInterface } from '../../types/loginRequestInterface';
import { LoginResponseInterface } from '../../types/loginResponseInterface';
import { BackendErrorsInterface } from '../../types/backendErrorsInterface';


export const loginAction = createAction(
  ActionTypes.login,
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.loginSuccess,
  props<{ response: LoginResponseInterface }>()
);

export const loginFailureAction = createAction(
  ActionTypes.loginFailure,
  props<{ backendError: BackendErrorsInterface }>()
);
