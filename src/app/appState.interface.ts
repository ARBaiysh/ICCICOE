import {AuthStateInterface} from './auth/types/authState.interface';
import {UserStateInterface} from './users/types/userState.interface';
import {Base1cStateInterface} from './base1c/types/base1cState.interface';
import {ControlReadingStateInterface} from './controlReading/types/controlReadingState.interface';


export interface AppStateInterface {
    auth: AuthStateInterface;
    user: UserStateInterface;
    base1c: Base1cStateInterface;
    controlReading: ControlReadingStateInterface;
}
