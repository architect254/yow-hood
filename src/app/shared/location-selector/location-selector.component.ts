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
    county: ['', Validators.required],
  });

  locations$: Observable<Location[]> = this._locationSelectorService.locations$;
  selectedLocation: Location | null = null;


  constructor(
    private _fb: FormBuilder,
    private _locationSelectorService: LocationSelectorService
  ) {}

  getControl(name:string){ return this.locationForm.get(name)}

  ngOnInit(): void {
    this._locationSelectorService.selectAllLocationsDummy();
  }

  addLocationFormCtrl(location: string, control: FormControl) {
    this.locationForm.addControl(location, control);
  }

  removeLocationFormCtrl(name: string) {
    this.locationForm.removeControl(name);
  }

  onSelectLocation(selectionChangeEvt: MatSelectChange) {
    switch (selectionChangeEvt.value.level) {
      case 0:
        this.addLocationFormCtrl(
          `subCounty`,
          this._fb.control(['', Validators.required])
        );
        break;

      case 1:
        this.addLocationFormCtrl(
          `location`,
          this._fb.control(['', Validators.required])
        );
        break;

      case 2:
        this.addLocationFormCtrl(
          `area`,
          this._fb.control(['', Validators.required])
        );
        break;

      default:
        break;
    }

    this._locationSelectorService.selectLocation(selectionChangeEvt.value);
  }

  removeLocationCtrl(name: string) {
    if (name == `area`) {
      this.removeLocationFormCtrl(name);
      this.selectedLocation = this.locationForm.get(`location`)?.getRawValue();
    }
    if (name == `location`) {
      this.removeLocationFormCtrl(`area`);
      this.removeLocationFormCtrl(name);
      this.selectedLocation = this.locationForm.get(`subCounty`)?.getRawValue();
    }
    if (name == `subCounty`) {
      this.removeLocationFormCtrl(`area`);
      this.removeLocationFormCtrl(`location`);
      this.removeLocationFormCtrl(name);
      this.selectedLocation = this.locationForm.get(`county`)?.getRawValue();
    }

    if (this.selectedLocation) {
      this._locationSelectorService.selectLocation(this.selectedLocation);
    }
  }
}
