import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Base1cInterface} from '../../users/types/base1cInterface';
import {environment} from '../../../environments/environment';
import {PSubscriberInterface} from '../types/pSubscriber.interface';
import {PSubscriberEntityInterface} from '../types/pSubscriberEntity.interface';

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

    getPSubscribers(base1c: Base1cInterface, offset: number = 0): Observable<PSubscriberInterface[]> {
        const url = environment.apiUrl + '/PSub/all/' + base1c.id + '?offset=' + offset;
        return this.http.get<PSubscriberInterface[]>(url);
    }

    getPSubscribersSearch(base1c: Base1cInterface, searchLine: string = ''): Observable<PSubscriberInterface[]> {
        const url = environment.apiUrl + '/PSub/search/' + base1c.id + ':' + searchLine;
        return this.http.get<PSubscriberInterface[]>(url);
    }

    getPSubscribersByLsProm(lsProm: string): Observable<PSubscriberEntityInterface> {
        const url = environment.apiUrl + '/PSub/' + lsProm;
        return this.http.get<PSubscriberEntityInterface>(url);
    }
}
