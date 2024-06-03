import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, catchError } from 'rxjs';

import { LocationSelectorService } from '../../shared/location-selector/location-selector.service';

import { Location } from '../../model/location';
import { Home } from '../../model/home';

@Injectable({
  providedIn: 'root',
})
export class HomeRentalsService extends LocationSelectorService {
  override API_URL: string = `${this.BASE_URL}/homes`;

  $homes: BehaviorSubject<Home[]> = new BehaviorSubject<Home[]>([]);

  get homes$(): Observable<Home[]> {
    return this.$homes.asObservable();
  }

  getAllHomes(): Observable<Home[]> {
    return this.http
      .get<Home[]>(this.API_URL, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  getHomesByLocationId(locationId: number | string) {
    this.$subscriptions$.add(
      this.http
        .get<Home[]>(this.API_URL)
        .pipe(catchError(this.errorHandler))
        .subscribe((homes: Home[]) => {
          this.$homes.next(homes);
        })
    );
  }

  selectAllHomesDummy(): void {
    this.$subscriptions$.add(
      this.getAllHomes().subscribe((homes: Home[]) => {
        this.$homes.next(homes);
      })
    );
  }
}
