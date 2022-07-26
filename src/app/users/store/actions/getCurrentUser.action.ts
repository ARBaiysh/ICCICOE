import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {UserInterface} from '../../types/userInterface';


export const getCurrentUserAction = createAction(
  ActionTypes.getCurrentUser
);

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.getCurrentUserSuccess,
  props<{currentUser: UserInterface}>()
);

export const getCurrentUserFailureAction = createAction(
  ActionTypes.getCurrentUserFailure
);
