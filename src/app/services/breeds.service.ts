import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {
    url = 'https://dog.ceo/api';

    constructor(private http: HttpClient) {}
    // Get Dog breeds
    getDogsBreeds(): Observable<any> {
        return this.http.get(this.url + '/breeds/list/all');
    }

    getDog(breed: string, catgory: string): Observable<any> {
        // Condition checks if there are more cathegories in the same breed
        if (catgory.length >= 1) {
            return this.http.get(this.url + '/breed/' + breed + '/' + catgory + '/images');
        } else {
            return this.http.get(this.url + '/breed/' + breed  + '/images');
        }
    }
}
