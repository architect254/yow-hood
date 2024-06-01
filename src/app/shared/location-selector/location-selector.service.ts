import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

import { Location } from '../../model/location';

import { LocationService } from '../../model/location.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationSelectorService extends LocationService {
  API_URL: string = `${this.BASE_URL}/select`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  locations$: Observable<Location[]> = new BehaviorSubject([]).asObservable();

  getAllLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.API_URL,this.httpOptions).pipe(catchError(this.errorHandler));
  }

  getLocationsByParentId(parentId: number | string): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.API_URL}/${parentId}`).pipe(catchError(this.errorHandler));
  }

  selectLocation(location: Location): void {
    this.selectedLocation = location;
    this.locations$ = this.getLocationsByParentId(location.id);
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
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
