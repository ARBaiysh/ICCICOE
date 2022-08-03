import {Base1cInterface} from './base1cInterface';

export interface UserInterface {
    id: number;
    username: string;
    firstName: string;
    email: string;
    lastName: string;
    position: string;
    resName: string;
    status: string;
    roles: string[];
    base1cDTO: Base1cInterface[];
}
