import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {UserInterface} from '../types/userInterface';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {
    }

    getCurrentUser(): Observable<UserInterface> {
        const url = environment.apiUrl + '/user/';
        return this.http.get<UserInterface>(url);
    }

  getAllUsers(): Observable<UserInterface[]> {
    const url = environment.apiUrl + '/user/all';
    return this.http.get<UserInterface[]>(url);
  }
}
