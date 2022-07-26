import { UserInterface } from './userInterface';


export interface UserStateInterface {
  isSubmittingCurrentUser: boolean;
  isLoggedInCurrentUser: boolean | null;
  currentUser: UserInterface | null;

  isSubmittingAllUsers: boolean;
  isLoggedInAllUsers: boolean | null;
  usersList: UserInterface[] | null;
}
