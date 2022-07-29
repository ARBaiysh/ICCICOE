import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { UserInterface } from '../../types/userInterface';
import { UserUpdateInterface } from '../../types/userUpdateInterface';
import { BackendErrorsInterface } from '../../../auth/types/backendErrorsInterface';


export const updateUserAction = createAction(
  ActionTypes.updateUser,
  props<{ userUpdateRequest: UserUpdateInterface }>()
);

export const updateUserSuccessAction = createAction(
  ActionTypes.updateUserSuccess,
  props<{userResponse: UserInterface}>()
);

export const updateUserFailureAction = createAction(
  ActionTypes.updateUserFailure,
  props<{updateBackendErrorsResponse: BackendErrorsInterface}>()
);
