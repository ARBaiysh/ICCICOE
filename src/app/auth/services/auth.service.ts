import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResponseInterface } from '../types/loginResponseInterface';
import { LoginRequestInterface } from '../types/loginRequestInterface';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from '../types/currentUser.interface';
import { environment } from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {
    }

    login(data: LoginRequestInterface): Observable<LoginResponseInterface> {
        const url = environment.apiUrl + 'auth/signin';
        return this.http.post<LoginResponseInterface>(url, data);
    }

    getCurrentUser(): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + 'user/';
        return this.http.get<CurrentUserInterface>(url);
    }
}
