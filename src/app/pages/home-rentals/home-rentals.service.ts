import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { LocationSelectorService } from '../../shared/location-selector/location-selector.service';

import { Location } from '../../model/location';
import { Home } from '../../model/home';

@Injectable({
  providedIn: 'root',
})
export class HomeRentalsService extends LocationSelectorService {
  override API_URL: string = `${this.BASE_URL}/${this.$location.getValue()}/home-rentals`;

  homes$: Observable<Home[]> = new BehaviorSubject([]).asObservable();

  getHomesByLocationId(locationId: number | string){
    this.homes$ = this.http.get<Home[]>(this.API_URL);
  }
}
