import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage-angular';

@Injectable()
export class PersistenceService {

    constructor(private storage: Storage) {
        this.storage.create();
    }

    set(key: string, data: any): void {
        try {
            this.storage.set(key, data);
        } catch (e) {
            console.error('Error saving to localStorage', e);
        }
    }


    async get(key: string): Promise<any> {
        try {
            return await this.storage.get(key);
        } catch (e) {
            console.error('Error getting data from localStorage', e);
            return null;
        }
    }

    removeToken(key: string): void {
        try {
            this.storage.remove(key);
        } catch (e) {
            console.error('Error remove token to localStorage', e);
        }
    }
}
