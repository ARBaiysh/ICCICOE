import {ControlReadingStateInterface} from '../types/controlReadingState.interface';
import {AppStateInterface} from '../../appState.interface';
import {createSelector} from '@ngrx/store';


export const controlReadingFeatureSelector = (state: AppStateInterface): ControlReadingStateInterface => state.controlReading;

export const isSubmittingSRSelector = createSelector(controlReadingFeatureSelector,
  (controlReadingState: ControlReadingStateInterface) => controlReadingState.isSubmittingCR
);
export const isLoggedInCRSelector = createSelector(controlReadingFeatureSelector,
    (controlReadingState: ControlReadingStateInterface) => controlReadingState.isLoggedInCR
);

export const controlReadingListSelector = createSelector(controlReadingFeatureSelector,
    (controlReadingState: ControlReadingStateInterface) => controlReadingState.controlReadingList
);

export const isSubmittingCreateCRSelector = createSelector(controlReadingFeatureSelector,
    (controlReadingState: ControlReadingStateInterface) => controlReadingState.isSubmittingCreateCR
);

export const isLoggedInCreateCRCRSelector = createSelector(controlReadingFeatureSelector,
    (controlReadingState: ControlReadingStateInterface) => controlReadingState.isLoggedInCreateCR
);

export const messageResponseSelector = createSelector(controlReadingFeatureSelector,
    (controlReadingState: ControlReadingStateInterface) => controlReadingState.messageResponse
);






