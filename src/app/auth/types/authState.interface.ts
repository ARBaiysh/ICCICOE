import {BackendErrorsInterface} from './backendErrorsInterface';
import {LoginResponseInterface} from './loginResponseInterface';
import {RegisterResponseInterface} from './registerResponse.interface';


export interface AuthStateInterface {
    isSubmittingLogin: boolean;
    isLoggedInLogin: boolean | null;
    responseLogin: LoginResponseInterface | null;
    backendErrorsLogin: BackendErrorsInterface | null;

    isSubmittingRegister: boolean;
    isLoggedInRegister: boolean | null;
    responseRegister: RegisterResponseInterface | null;
    backendErrorsRegister: BackendErrorsInterface | null;
}
