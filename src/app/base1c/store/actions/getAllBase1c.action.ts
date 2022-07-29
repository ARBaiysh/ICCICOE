import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {Base1cInterface} from '../../../users/types/base1cInterface';


export const getAllBases1cAction = createAction(
  ActionTypes.getAllBase1c
);

export const getAllBases1cSuccessAction = createAction(
  ActionTypes.getAllBase1cSuccess,
  props<{base1cList: Base1cInterface[]}>()
);

export const getAllBases1cFailureAction = createAction(
  ActionTypes.getAllBase1cFailure
);
