import {Base1cInterface} from './base1cInterface';

export interface UserUpdateInterface {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    position: string;
    resName: string;
    roles: string[];
    base1cDTO: Base1cInterface[];
}
