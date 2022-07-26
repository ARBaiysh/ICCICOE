
import { UserStateInterface } from '../types/userState.interface';
import { createSelector } from '@ngrx/store';
import {AppStateInterface} from '../../appState.interface';


export const userFeatureSelector = (state: AppStateInterface): UserStateInterface => state.user;

export const isSubmittingCurrentUserSelector = createSelector(userFeatureSelector,
  (userState: UserStateInterface) => userState.isSubmittingCurrentUser
);

export const isLoggedInCurrentUserSelector = createSelector(userFeatureSelector,
    (userState: UserStateInterface) => userState.isLoggedInCurrentUser
);

export const currentUserSelector = createSelector(userFeatureSelector,
    (userState: UserStateInterface) => userState.currentUser
);

export const isSubmittingAllUsersSelector = createSelector(userFeatureSelector,
  (userState: UserStateInterface) => userState.isSubmittingAllUsers
);

export const isLoggedInAllUsersSelector = createSelector(userFeatureSelector,
  (userState: UserStateInterface) => userState.isLoggedInAllUsers
);
export const usersListSelector = createSelector(userFeatureSelector,
  (userState: UserStateInterface) => userState.usersList
);


