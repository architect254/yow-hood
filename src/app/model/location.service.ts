import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { Location } from './location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  BASE_URL: string = `${environment.apiUrl}/location`;

  $location: BehaviorSubject<Location | null> =
    new BehaviorSubject<Location | null>(null);

  constructor(public http: HttpClient) {}

  get selectedLocation$(): Observable<Location | null> {
    return this.$location.asObservable();
  } 

  set selectedLocation(location: Location) {
    this.$location.next(location);
  }
}
