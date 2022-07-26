import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {UserInterface} from '../../types/userInterface';


export const getAllUsersAction = createAction(
  ActionTypes.getAllUsers
);

export const getAllUsersSuccessAction = createAction(
  ActionTypes.getAllUsersSuccess,
  props<{usersList: UserInterface[]}>()
);

export const getAllUsersFailureAction = createAction(
  ActionTypes.getAllUsersFailure
);
