import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginResponseInterface} from '../types/loginResponseInterface';
import {LoginRequestInterface} from '../types/loginRequestInterface';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {RegisterRequestInterface} from '../types/registerRequest.interface';
import {RegisterResponseInterface} from '../types/registerResponse.interface';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {
    }

    login(data: LoginRequestInterface): Observable<LoginResponseInterface> {
        const url = environment.apiUrl + '/auth/signin';
        return this.http.post<LoginResponseInterface>(url, data);
    }

    register(data: RegisterRequestInterface): Observable<RegisterResponseInterface> {
        const url = environment.apiUrl + '/auth/signup';
        return this.http.post<RegisterResponseInterface>(url, data);
    }

}
