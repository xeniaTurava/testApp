import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {Workers} from '../Classes/Workers';

@Injectable({
  providedIn: 'root'
})
export class RrhhService {

 constructor(private http: HttpClient) { }

  // Get all workers in the industry
  getWorkers(): Observable <any>{
    return this.http.get<Workers[]>('https://www.mockaroo.com/aaafc040/download?count=10&key=aa8685c0');
  }
}
