import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'yh-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
})
export class CardComponent {
  @Input() imageUrl: string | undefined;
  @Input() heading: string | undefined;
  @Input() about: string | undefined;
}
