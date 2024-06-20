import { TestBed } from '@angular/core/testing';

import { HomeRentalsService } from './home-rentals.service';

describe('HomeRentalsService', () => {
  let service: HomeRentalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeRentalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
