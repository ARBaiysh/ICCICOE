import {ERoleInterface} from './eRoleInterface';
import {Base1cInterface} from './base1cInterface';

export interface UserInterface {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    position: string;
    resName: string;
    status: string;
    roles: ERoleInterface[];
    base1cDTO: Base1cInterface[];
}
