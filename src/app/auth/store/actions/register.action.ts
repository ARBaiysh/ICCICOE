import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {RegisterRequestInterface} from '../../types/registerRequest.interface';
import {RegisterResponseInterface} from '../../types/registerResponse.interface';
import {BackendErrorsInterface} from '../../types/backendErrorsInterface';


export const registerAction = createAction(ActionTypes.register, props<{ request: RegisterRequestInterface }>());
export const registerSuccessAction = createAction(ActionTypes.registerSuccess, props<{ response: RegisterResponseInterface }>());
export const registerFailureAction = createAction(ActionTypes.registerFailure, props<{ backendError: BackendErrorsInterface }>());
