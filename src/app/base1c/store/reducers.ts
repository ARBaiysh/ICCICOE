import { Action, createReducer, on } from '@ngrx/store';
import { Base1cStateInterface } from '../types/base1cState.interface';
import { getAllBases1cAction, getAllBases1cFailureAction, getAllBases1cSuccessAction } from './actions/getAllBase1c.action';
import { getPSubscribersAction, getPSubscribersFailureAction, getPSubscribersSuccessAction } from './actions/getPSubscribers.action';


const initialState: Base1cStateInterface = {
  isSubmittingGetAllBase1c: false,
  isLoggedInGetAllBase1c: null,
  base1cList: null,

  isSubmittingGetPSubscribers: false,
  isLoggedInGetPSubscribers: null,
  pSubscriberList: [],
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
//GetPSubscriber-----------------------------------------------------
  on(getPSubscribersAction, ( state ): Base1cStateInterface => ({
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
      pSubscriberList: action.pSubscriberList
    })
  ),
  on(getPSubscribersFailureAction, ( state, action ): Base1cStateInterface => ({
      ...state,
      isSubmittingGetPSubscribers: false,
      isLoggedInGetPSubscribers: false,
      pSubscriberList: []
    })
  ),
);


export function reducers( state: Base1cStateInterface, action: Action ) {
  return base1cReducer(state, action);
}
