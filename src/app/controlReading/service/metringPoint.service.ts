import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ControlReadingInterface} from '../types/controlReading.interface';
import {environment} from '../../../environments/environment';
import {ControlReadingRequestInterface} from '../types/controlReadingRequest.interface';
import {MessageResponseInterface} from '../types/messageResponse.interface';

@Injectable({
    providedIn: 'root'
})
export class MetringPointService {
    private lsMeteringPoint: string;


    constructor(private http: HttpClient) {
    }

    getLsMeteringPoint(): string {
        return this.lsMeteringPoint;
    }

    setLsMeteringPoint(value: string) {
        this.lsMeteringPoint = value;
    }

    createControlReading(controlReadingRequest: ControlReadingRequestInterface): Observable<MessageResponseInterface> {
        const url = environment.apiUrl + '/controlReading/create';
        return this.http.post<MessageResponseInterface>(url, controlReadingRequest);
    }

    getControlReadingList(lsMeteringPoint: string): Observable<ControlReadingInterface[]> {
        const url = environment.apiUrl + '/controlReading/' + lsMeteringPoint;
        return this.http.get<ControlReadingInterface[]>(url);
    }
}
