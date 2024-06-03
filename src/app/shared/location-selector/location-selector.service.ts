import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  Observable,
  Subscription,
  catchError,
  throwError,
} from 'rxjs';

import { Location } from '../../model/location';

import { LocationService } from '../../model/location.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationSelectorService extends LocationService {
  API_URL: string = `${this.BASE_URL}/locations`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  $locations: BehaviorSubject<Location[]> = new BehaviorSubject<Location[]>([]);

  get locations$(): Observable<Location[]> {
    return this.$locations.asObservable();
  }

  getAllLocations(): Observable<Location[]> {
    return this.http
      .get<Location[]>(this.API_URL, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  getLocationsByParentId(parentId: number | string): Observable<Location[]> {
    return this.http
      .get<Location[]>(`${this.API_URL}/${parentId}`)
      .pipe(catchError(this.errorHandler));
  }

  selectLocation(location: Location): void {
    this.selectedLocation = location;
    this.$subscriptions$.add(
      this.getLocationsByParentId(location.id).subscribe(
        (locations: Location[]) => {
          this.$locations.next(locations);
        }
      )
    );
  }

  selectAllLocationsDummy(): void {
    this.$subscriptions$.add(
      this.getAllLocations().subscribe((locations: Location[]) => {
        this.$locations.next(locations);
      })
    );
  }

  errorHandler(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => errorMessage);
  }
}
