import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Base1cInterface} from '../../users/types/base1cInterface';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class Base1cService {

    constructor(private http: HttpClient) {
    }

    getAllBase1c(): Observable<Base1cInterface[]> {
        const url = environment.apiUrl + '/base1c/all';
        return this.http.get<Base1cInterface[]>(url);
    }
}
