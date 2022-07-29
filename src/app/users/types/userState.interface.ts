import { UserInterface } from './userInterface';
import { BackendErrorsInterface } from '../../auth/types/backendErrorsInterface';


export interface UserStateInterface {
  isSubmittingCurrentUser: boolean;
  isLoggedInCurrentUser: boolean | null;
  currentUser: UserInterface | null;

  isSubmittingAllUsers: boolean;
  isLoggedInAllUsers: boolean | null;
  usersList: UserInterface[] | null;

  isSubmittingUpdateUser: boolean;
  isLoggedInUpdate: boolean | null;
  usersUpdate: UserInterface | null;
  updateBackendErrorsResponse: BackendErrorsInterface | null;
}
