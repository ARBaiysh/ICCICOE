import { Action, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import { loginAction, loginFailureAction, loginSuccessAction } from './actions/login.action';


const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoggedIn: null,
  backendErrors: null,
  isErrors: false,
  response: null
};

const authReducer = createReducer(
  initialState,
//login-----------------------------------------------------
  on(loginAction, ( state ): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      backendErrors: null,
      isErrors: false
    })
  ),
  on(loginSuccessAction,
    ( state, action ): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      backendErrors: null,
      isErrors: false,
      response: action.response
    })
  ),
  on(loginFailureAction, ( state, action ): AuthStateInterface => ({
      ...state,
      isErrors: true,
      isSubmitting: false,
      backendErrors: action.backendError,
      isLoggedIn: false,
    })
  ),
);

export function reducers( state: AuthStateInterface, action: Action ) {
  return authReducer(state, action);
}
