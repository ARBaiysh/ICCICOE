import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Base1cInterface } from '../../users/types/base1cInterface';
import { environment } from '../../../environments/environment';
import { PSubscriberInterface } from '../types/pSubscriber.interface';

@Injectable({
  providedIn: 'root'
})
export class Base1cService {

  base1c: Base1cInterface;

  constructor( private http: HttpClient ) {
  }

  setBase1c( base1c: Base1cInterface ): void {
    this.base1c = base1c;
  }

  getBase1c(): Base1cInterface {
    return this.base1c;
  }

  getAllBase1c(): Observable<Base1cInterface[]> {
    const url = environment.apiUrl + '/base1c/all';
    return this.http.get<Base1cInterface[]>(url);
  }

  getPSubscribers( base1c: Base1cInterface, offset: number = 0 ): Observable<PSubscriberInterface[]> {
    const url = environment.apiUrl + '/PSub/all/' + base1c.id + '?offset=' + offset;
    return this.http.get<PSubscriberInterface[]>(url);
  }

  getPSubscribersSearch( base1c: Base1cInterface, searchLine: string = '' ): Observable<PSubscriberInterface[]> {
    const url = environment.apiUrl + '/PSub/search/' + base1c.id + ':' + searchLine;
    return this.http.get<PSubscriberInterface[]>(url);
  }


}
