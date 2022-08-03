import {ERoleInterface} from './eRoleInterface';
import {Base1cInterface} from './base1cInterface';

export interface UserUpdateInterface {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    position: string;
    resName: string;
    roles: ERoleInterface[];
    base1cDTO: Base1cInterface[];
}
