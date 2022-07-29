import {createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../appState.interface';
import {Base1cStateInterface} from '../types/base1cState.interface';


export const base1cFeatureSelector = (state: AppStateInterface): Base1cStateInterface => state.base1c;

export const isSubmittingGetAllBase1cSelector = createSelector(base1cFeatureSelector,
  (base1cState: Base1cStateInterface) => base1cState.isSubmittingGetAllBase1c
);

export const isLoggedInGetAllBase1cSelector = createSelector(base1cFeatureSelector,
    (base1cState: Base1cStateInterface) => base1cState.isLoggedInGetAllBase1c
);
export const base1cListSelector = createSelector(base1cFeatureSelector,
    (base1cState: Base1cStateInterface) => base1cState.base1cList
);


