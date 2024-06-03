import { Routes } from '@angular/router';

import { HomeRentalsComponent } from './pages/home-rentals/home-rentals.component';
import { HouseDetailsComponent } from './pages/house-details/house-details.component';
import { LayoutComponent } from './core/layout/layout.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
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
      { path: '**', component: NotFoundComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
