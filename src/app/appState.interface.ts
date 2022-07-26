import { AuthStateInterface } from './auth/types/authState.interface';
import {UserStateInterface} from './users/types/userState.interface';


export interface AppStateInterface {
  auth: AuthStateInterface;
  user: UserStateInterface;
}
