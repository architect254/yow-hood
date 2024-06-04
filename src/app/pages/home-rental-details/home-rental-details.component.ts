import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home-rental-details',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './home-rental-details.component.html',
  styleUrl: './home-rental-details.component.scss',
})
export class HomeRentalDetailsComponent {
  constructor(private _route: ActivatedRoute) {}
}
