import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { PSubscriberEntityInterface } from '../../types/pSubscriberEntity.interface';


export const getPSubscriberAction = createAction(
  ActionTypes.getPSubscriber,
  props<{ lsPorm: string }>()
);

export const getPSubscriberSuccessAction = createAction(
  ActionTypes.getPSubscriberSuccess,
  props<{ pSubscriber: PSubscriberEntityInterface }>()
);

export const getPSubscriberFailureAction = createAction(
  ActionTypes.getPSubscriberFailure
);
