import {CurrentUserInterface} from './currentUser.interface';


export interface UserStateInterface {
  isSubmitting: boolean;
  isLoggedIn: boolean | null;
  currentUser: CurrentUserInterface| null;
}
