import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {CurrentUserInterface} from '../../types/currentUser.interface';


export const getCurrentUserAction = createAction(
  ActionTypes.getCurrentUser
);

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.getCurrentUserSuccess,
  props<{currentUser: CurrentUserInterface}>()
);

export const getCurrentUserFailureAction = createAction(
  ActionTypes.getCurrentUserFailure
);
