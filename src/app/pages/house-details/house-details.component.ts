import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'house-details',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './house-details.component.html',
  styleUrl: './house-details.component.scss'
})
export class HouseDetailsComponent {

}
