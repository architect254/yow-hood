import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { LocationSelectorComponent } from '../../shared/location-selector/location-selector.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LogoComponent } from '../../shared/logo/logo.component';

@Component({
  selector: 'yh-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AsyncPipe,
    RouterOutlet,
    LocationSelectorComponent,
    LogoComponent,
    MatButtonToggleModule
  ]
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);

  searchCtrl: FormControl = new FormControl();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
