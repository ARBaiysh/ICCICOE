import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { PSubscriberInterface } from '../../types/pSubscriber.interface';
import { Base1cInterface } from '../../../users/types/base1cInterface';


export const getPSubscribersAction = createAction(
  ActionTypes.getPSubscribers,
  props<{ base1c: Base1cInterface }>()
);

export const getPSubscribersSuccessAction = createAction(
  ActionTypes.getPSubscribersSuccess,
  props<{ pSubscriberList: PSubscriberInterface[] }>()
);

export const getPSubscribersFailureAction = createAction(
  ActionTypes.getPSubscribersFailure
);
