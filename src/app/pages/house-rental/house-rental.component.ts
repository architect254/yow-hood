import { Component } from '@angular/core';
import { LocationSelectorComponent } from '../../shared/location-selector/location-selector.component';

@Component({
  selector: 'yh-house-rental',
  standalone: true,
  imports: [LocationSelectorComponent],
  templateUrl: './house-rental.component.html',
  styleUrl: './house-rental.component.scss'
})
export class HouseRentalComponent {

}
