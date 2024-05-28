import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'yh-location-selector',
  standalone: true,
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    AsyncPipe,
  ],
  templateUrl: './location-selector.component.html',
  styleUrl: './location-selector.component.scss',
})
export class LocationSelectorComponent {
  locationForm: FormGroup = this._fb.group({
    locations: this._fb.array([{ county: ['', Validators.required] }]),
  });
  locations = [{ name: 'Mombasa', id: 0, pid: 0 }];
  currentLocationIndex = 0;

  constructor(private _fb: FormBuilder) {}

  get locationsCtrls() {
    return this.locationForm.get('locations') as FormArray;
  }

  addLocation(location: FormControl) {
    this.locationsCtrls.push(location);
  }

  onSelectLocation(selectionChangeEvt: MatSelectChange) {
    switch (this.currentLocationIndex) {
      case 0:
        this.addLocation(
          this._fb.control({ subCounty: ['', Validators.required] })
        );
        break;

      case 1:
        this.addLocation(
          this._fb.control({ location: ['', Validators.required] })
        );
        break;

      case 2:
        this.addLocation(this._fb.control({ area: ['', Validators.required] }));
        break;

      case 3:
        break;

      default:
        break;
    }
  }

  removeLocation(index: number) {
    let lastLocationIndex = this.currentLocationIndex;

    do {
      this.locationsCtrls.removeAt(lastLocationIndex--);
    } while (lastLocationIndex >= index);
  }

  locationName(index: number) {
    if (index >= this.currentLocationIndex) {
      this.currentLocationIndex = index;
    }

    switch (index) {
      case 0:
        return 'County';
        break;

      case 1:
        return 'Sub-County';
        break;

      case 2:
        return 'Location';
        break;

      case 3:
        return 'Area';
        break;

      default:
        return 'Out Of Scope Error';
        break;
    }
  }
}
