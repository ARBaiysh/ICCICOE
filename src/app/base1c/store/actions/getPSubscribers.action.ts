import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {PSubscriberInterface} from '../../types/pSubscriber.interface';
import {Base1cInterface} from '../../../users/types/base1cInterface';


export const getNewPSubscribersAction = createAction(
    ActionTypes.getNewPSubscribers,
    props<{ base1c: Base1cInterface; offset: number }>()
);

export const getNextPSubscribersAction = createAction(
    ActionTypes.getNextPSubscribers,
    props<{ base1c: Base1cInterface; offset: number }>()
);

export const getPSubscribersSuccessAction = createAction(
    ActionTypes.getPSubscribersSuccess,
    props<{ pSubscriberList: PSubscriberInterface[] }>()
);

export const getPSubscribersFailureAction = createAction(
    ActionTypes.getPSubscribersFailure
);
