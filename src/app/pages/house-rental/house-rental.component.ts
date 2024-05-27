import { Component } from '@angular/core';
import { CardComponent } from '../../feature/card/card.component';

@Component({
  selector: 'yh-house-rental',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './house-rental.component.html',
  styleUrl: './house-rental.component.scss'
})
export class HouseRentalComponent {

}
