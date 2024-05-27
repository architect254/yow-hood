import { Component } from '@angular/core';
import { NavigationComponent } from './shared/navigation/navigation.component';

@Component({
  selector: 'root',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
