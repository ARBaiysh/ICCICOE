import { Action, createReducer, on } from '@ngrx/store';
import { UserStateInterface } from '../types/userState.interface';
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from './actions/getCurrentUser.action';
import { getAllUsersAction, getAllUsersFailureAction, getAllUsersSuccessAction } from './actions/getAllUsers.action';


const initialState: UserStateInterface = {
  isSubmittingCurrentUser: false,
  isLoggedInCurrentUser: null,
  currentUser: null,

  isSubmittingAllUsers: false,
  isLoggedInAllUsers: null,
  usersList: null,
};

const userReducer = createReducer(
  initialState,
//currentUser-----------------------------------------------------
  on(getCurrentUserAction, ( state ): UserStateInterface => ({
      ...state,
      isSubmittingCurrentUser: true,
      isLoggedInCurrentUser: null,
      currentUser: null,
    })
  ),
  on(getCurrentUserSuccessAction,
    ( state, action ): UserStateInterface => ({
      ...state,
      isSubmittingCurrentUser: false,
      isLoggedInCurrentUser: true,
      currentUser: action.currentUser,
    })
  ),
  on(getCurrentUserFailureAction, ( state ): UserStateInterface => ({
      ...state,
      isSubmittingCurrentUser: false,
      isLoggedInCurrentUser: false,
      currentUser: null,
    })
  ),
// getAllUsers
  on(getAllUsersAction, ( state ): UserStateInterface => ({
      ...state,
      isSubmittingAllUsers: true,
      isLoggedInAllUsers: null,
      usersList: null,
    })
  ),
  on(getAllUsersSuccessAction,
    ( state, action ): UserStateInterface => ({
      ...state,
      isSubmittingAllUsers: false,
      isLoggedInAllUsers: true,
      usersList: action.usersList,
    })
  ),
  on(getAllUsersFailureAction, ( state ): UserStateInterface => ({
      ...state,
      isSubmittingAllUsers: false,
      isLoggedInAllUsers: false,
      usersList: null,
    })
  )
);


export function reducers( state: UserStateInterface, action: Action ) {
  return userReducer(state, action);
}
