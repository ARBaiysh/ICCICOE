import { BackendErrorsInterface } from './backendErrorsInterface';
import { LoginResponseInterface } from './loginResponseInterface';


export interface AuthStateInterface {
  isSubmitting: boolean;
  isLoggedIn: boolean | null;
  response: LoginResponseInterface | null;
  backendErrors: BackendErrorsInterface | null;
  isErrors: boolean;
}
