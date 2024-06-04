import { Routes } from '@angular/router';

import { HomeRentalsComponent } from './pages/home-rentals/home-rentals.component';
import { LayoutComponent } from './core/layout/layout.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeRentalDetailsComponent } from './pages/home-rental-details/home-rental-details.component';
import { homeResolver } from './model/home.resolver';

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
        path: 'details',
        component: HomeRentalDetailsComponent,
        data: { title: 'Rental Details' },
        resolve: [homeResolver],
      },
      { path: '', redirectTo: '/home-rentals', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
