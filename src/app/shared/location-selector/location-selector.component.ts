import { Component, OnInit } from '@angular/core';
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

import { Observable } from 'rxjs';

import { LocationSelectorService } from './location-selector.service';

import { Location } from '../../model/location';

@Component({
  selector: 'location-selector',
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
export class LocationSelectorComponent implements OnInit {
  locationForm: FormGroup = this._fb.group({
    locations: this._fb.array([{ county: ['', Validators.required] }]),
  });

  locations$: Observable<Location[]> = this._locationSelectorService.locations$;
  currentLocationIndex = 0;

  constructor(
    private _fb: FormBuilder,
    private _locationSelectorService: LocationSelectorService
  ) {}

  ngOnInit(): void {
    this._locationSelectorService.selectAllLocationsDummy();
  }

  get locationsCtrls() {
    return this.locationForm.get('locations') as FormArray;
  }

  addLocationCtrl(location: FormControl) {
    this.locationsCtrls.push(location);
  }

  onSelectLocation(selectionChangeEvt: MatSelectChange) {
    switch (this.currentLocationIndex) {
      case 0:
        this.addLocationCtrl(
          this._fb.control({ subCounty: ['', Validators.required] })
        );
        break;

      case 1:
        this.addLocationCtrl(
          this._fb.control({ location: ['', Validators.required] })
        );
        break;

      case 2:
        this.addLocationCtrl(
          this._fb.control({ area: ['', Validators.required] })
        );
        break;

      default:
        break;
    }

    this._locationSelectorService.selectLocation(selectionChangeEvt.value);
  }

  removeLocation(index: number) {
    do {
      this.locationsCtrls.removeAt(this.currentLocationIndex--);
    } while (this.currentLocationIndex >= index);
    const selectedLocation: Location = this.locationsCtrls
      .at(this.currentLocationIndex)
      .getRawValue();
    this._locationSelectorService.selectLocation(selectedLocation);
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
