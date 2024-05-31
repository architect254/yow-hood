import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Location } from '../../model/location';

import { LocationService } from '../../model/location.service';

@Injectable({
  providedIn: 'root',
})
export class LocationSelectorService extends LocationService {
  API_URL: string = `${this.BASE_URL}/select`;

  locations$: Observable<Location[]> = new BehaviorSubject([]).asObservable();

  getAllLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.API_URL);
  }

  getLocationsByParentId(parentId: number | string): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.API_URL}/${parentId}`);
  }

  selectLocation(location: Location): void {
    this.selectedLocation = location;
    this.locations$ = this.getLocationsByParentId(location.id);
  }
}
