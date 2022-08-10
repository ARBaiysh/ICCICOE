import {ControlReadingInterface} from './controlReading.interface';
import {MessageResponseInterface} from './messageResponse.interface';

export interface ControlReadingStateInterface {
    isSubmittingCR: boolean;
    isLoggedInCR: boolean | null;
    controlReadingList: ControlReadingInterface[] | null;

    isSubmittingCreateCR: boolean;
    isLoggedInCreateCR: boolean | null;
    messageResponse: MessageResponseInterface | null;
}
