import { Routes } from '@angular/router';
import { HouseRentalComponent } from './pages/house-rental/house-rental.component';

export const routes: Routes = [
    {path:"house-rental", component: HouseRentalComponent},
    {path:"", redirectTo:"/house-rental", pathMatch:'full'}
];
