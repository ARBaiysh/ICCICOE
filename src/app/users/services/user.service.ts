import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {CurrentUserInterface} from '../types/currentUser.interface';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {
    }

    getCurrentUser(): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/user/';
        return this.http.get<CurrentUserInterface>(url);
    }
}
