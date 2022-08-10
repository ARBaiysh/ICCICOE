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

//getControlReading
export const controlReadingListSelector = createSelector(controlReadingFeatureSelector,
    (controlReadingState: ControlReadingStateInterface) => controlReadingState.controlReadingList
);
//createControlReading
export const messageResponseSelector = createSelector(controlReadingFeatureSelector,
    (controlReadingState: ControlReadingStateInterface) => controlReadingState.messageResponse
);






