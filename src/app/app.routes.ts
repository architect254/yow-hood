import { Routes } from '@angular/router';

import { HomeRentalsComponent } from './pages/home-rentals/home-rentals.component';
import { HouseDetailsComponent } from './pages/house-details/house-details.component';

export const routes: Routes = [
  {
    path: 'home-rentals',
    component: HomeRentalsComponent,
    data: { title: 'Home Rentals' },
  },
  {
    path: 'house-details',
    component: HouseDetailsComponent,
    data: { title: 'House Details' },
  },
  { path: '', redirectTo: '/home-rentals', pathMatch: 'full' },
];
