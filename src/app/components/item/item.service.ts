import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

    constructor(private http: HttpClient) {}

    getItems(): Observable<any[]> {
        return this.loadFromSessionStorage() === false ?
        this.http.get('http://localhost:4200/assets/data.json') : of(this.loadFromSessionStorage());
    }

    editItem(a, data) {
        const modifiedStorage = this.loadFromSessionStorage().map(item => {
            if (Number(item['a']) === a) {
                return Object.assign(item, data);
            }
            return item;
        });
        console.log(modifiedStorage, 'modifiedStorage');
        this.saveToSessionStorage(modifiedStorage);
    }

    saveToSessionStorage(data) {
        try {
            const serializedState = JSON.stringify(data);
            sessionStorage.setItem('data', serializedState);
        } catch (err) {
            console.log('Error when setting the state.');
            return false;
        }
    }

    loadFromSessionStorage() {
        try {
            const serializedState = sessionStorage.getItem('data');
            if (!serializedState) {
                return false;
            } else {
                return JSON.parse(serializedState);
            }
        } catch (ere) {
            console.log('Error when retrieving the state.');
            return false;
        }
    }

}
