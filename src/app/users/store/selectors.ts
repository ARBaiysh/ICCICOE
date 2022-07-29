
import { UserStateInterface } from '../types/userState.interface';
import { createSelector } from '@ngrx/store';
import {AppStateInterface} from '../../appState.interface';


export const userFeatureSelector = (state: AppStateInterface): UserStateInterface => state.user;

//getCurrentUser
export const isSubmittingCurrentUserSelector = createSelector(userFeatureSelector,
  (userState: UserStateInterface) => userState.isSubmittingCurrentUser
);
export const isLoggedInCurrentUserSelector = createSelector(userFeatureSelector,
    (userState: UserStateInterface) => userState.isLoggedInCurrentUser
);
export const currentUserSelector = createSelector(userFeatureSelector,
    (userState: UserStateInterface) => userState.currentUser
);

//getAllUsers
export const isSubmittingAllUsersSelector = createSelector(userFeatureSelector,
  (userState: UserStateInterface) => userState.isSubmittingAllUsers
);
export const isLoggedInAllUsersSelector = createSelector(userFeatureSelector,
  (userState: UserStateInterface) => userState.isLoggedInAllUsers
);
export const usersListSelector = createSelector(userFeatureSelector,
  (userState: UserStateInterface) => userState.usersList
);

//updateUser
export const isSubmittingUpdateUserSelector = createSelector(userFeatureSelector,
  (userState: UserStateInterface) => userState.isSubmittingUpdateUser
);
export const isLoggedInUpdateSelector = createSelector(userFeatureSelector,
  (userState: UserStateInterface) => userState.isLoggedInUpdate
);
export const usersUpdateSelector = createSelector(userFeatureSelector,
  (userState: UserStateInterface) => userState.usersUpdate
);
export const updateBackendErrorsResponseSelector = createSelector(userFeatureSelector,
  (userState: UserStateInterface) => userState.updateBackendErrorsResponse
);


