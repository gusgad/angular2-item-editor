import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    constructor(private http: HttpClient) {}

    // Get items from "API" or sessionStorage
    getItems(): Observable<any[]> {
        return this.loadFromSessionStorage() === false ?
        this.http.get(`${window.location.protocol}//${window.location.host}/assets/data.json`) : of(this.loadFromSessionStorage());
    }

    // Editing a specific item
    editItem(a, data): void {
        const modifiedStorage = this.loadFromSessionStorage().map(item => {
            // if "a" in the list matched the given "a" => merge objects
            if (Number(item['a']) === a) {
                return Object.assign(item, data);
            }
            return item;
        });

        this.saveToSessionStorage(modifiedStorage);
    }

    saveToSessionStorage(data): any {
        try {
            const serializedStorage = JSON.stringify(data);
            sessionStorage.setItem('data', serializedStorage);
        } catch (err) {
            console.log('Error when setting the storage.');
            return false;
        }
    }

    loadFromSessionStorage(): any {
        try {
            const serializedStorage = sessionStorage.getItem('data');
            if (!serializedStorage) {
                return false;
            } else {
                return JSON.parse(serializedStorage);
            }
        } catch (err) {
            console.log('Error when retrieving the storage.');
            return false;
        }
    }

}
