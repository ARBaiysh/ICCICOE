
import { UserStateInterface } from '../types/userState.interface';
import { createSelector } from '@ngrx/store';
import {AppStateInterface} from '../../appState.interface';


export const userFeatureSelector = (state: AppStateInterface): UserStateInterface => state.user;

export const isSubmittingSelector = createSelector(userFeatureSelector,
  (userState: UserStateInterface) => userState.isSubmitting
);

export const isLoggedInSelector = createSelector(userFeatureSelector,
    (userState: UserStateInterface) => userState.isLoggedIn
);

export const currentUserSelector = createSelector(userFeatureSelector,
    (userState: UserStateInterface) => userState.currentUser
);


