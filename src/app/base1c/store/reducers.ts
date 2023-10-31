import { Action, createReducer, on } from '@ngrx/store';
import { Base1cStateInterface } from '../types/base1cState.interface';
import { getAllBases1cAction, getAllBases1cFailureAction, getAllBases1cSuccessAction } from './actions/getAllBase1c.action';
import {
  getNewPSubscribersAction,
  getNextPSubscribersAction,
  getPSubscribersFailureAction,
  getPSubscribersSuccessAction,
  getSearchPSubscribersAction
} from './actions/getPSubscribers.action';
import { getPSubscriberAction, getPSubscriberFailureAction, getPSubscriberSuccessAction } from './actions/getPSubscriber.action';


const initialState: Base1cStateInterface = {
  isSubmittingGetAllBase1c: false,
  isLoggedInGetAllBase1c: null,
  base1cList: null,

  isSubmittingGetPSubscribers: false,
  isLoggedInGetPSubscribers: null,
  pSubscriberList: [],

  isSubmittingGetPSubscriber: false,
  isLoggedInGetPSubscriber: null,
  pSubscriber: null,
};

const base1cReducer = createReducer(
  initialState,
//getAllBase1c-----------------------------------------------------
  on(getAllBases1cAction, ( state ): Base1cStateInterface => ({
      ...state,
      isSubmittingGetAllBase1c: true,
      isLoggedInGetAllBase1c: null,
      base1cList: null,
    })
  ),
  on(getAllBases1cSuccessAction, ( state, action ): Base1cStateInterface => ({
      ...state,
      isSubmittingGetAllBase1c: false,
      isLoggedInGetAllBase1c: true,
      base1cList: action.base1cList,
    })
  ),
  on(getAllBases1cFailureAction, ( state ): Base1cStateInterface => ({
      ...state,
      isSubmittingGetAllBase1c: false,
      isLoggedInGetAllBase1c: false,
      base1cList: null,
    })
  ),

//GetPSubscribers-----------------------------------------------------
  on(getNewPSubscribersAction, ( state ): Base1cStateInterface => ({
      ...state,
      isSubmittingGetPSubscribers: true,
      isLoggedInGetPSubscribers: null,
      pSubscriberList: []
    })
  ),
  on(getNextPSubscribersAction, ( state ): Base1cStateInterface => ({
      ...state,
      isSubmittingGetPSubscribers: true,
      isLoggedInGetPSubscribers: null,
    })
  ),
  on(getSearchPSubscribersAction, ( state ): Base1cStateInterface => ({
      ...state,
      isSubmittingGetPSubscribers: true,
      isLoggedInGetPSubscribers: null,
      pSubscriberList: [],
    })
  ),
  on(getPSubscribersSuccessAction, ( state, action ): Base1cStateInterface => ({
      ...state,
      isSubmittingGetPSubscribers: false,
      isLoggedInGetPSubscribers: true,
      pSubscriberList: [...state.pSubscriberList, ...action.pSubscriberList]
    })
  ),
  on(getPSubscribersFailureAction, ( state ): Base1cStateInterface => ({
      ...state,
      isSubmittingGetPSubscribers: false,
      isLoggedInGetPSubscribers: false,
      pSubscriberList: []
    })
  ),

  //GetPSubscribers-----------------------------------------------------
  on(getPSubscriberAction, ( state ): Base1cStateInterface => ({
      ...state,
      isSubmittingGetPSubscriber: true,
      isLoggedInGetPSubscriber: null,
      pSubscriber: null,
    })
  ),
  on(getPSubscriberSuccessAction, ( state, action ): Base1cStateInterface => ({
      ...state,
      isSubmittingGetPSubscriber: false,
      isLoggedInGetPSubscriber: true,
      pSubscriber: action.pSubscriber,
    })
  ),
  on(getPSubscriberFailureAction, ( state ): Base1cStateInterface => ({
      ...state,
      isSubmittingGetPSubscriber: false,
      isLoggedInGetPSubscriber: false,
      pSubscriber: null,
    })
  ),
);


export function reducers( state: Base1cStateInterface, action: Action ) {
  return base1cReducer(state, action);
}
