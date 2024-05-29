import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'yh-grid',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent {
  @Input() imageUrl: string | undefined;
  @Input() heading: string | undefined;
  @Input() about: string | undefined;
}
