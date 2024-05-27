import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRentalComponent } from './house-rental.component';

describe('HouseRentalComponent', () => {
  let component: HouseRentalComponent;
  let fixture: ComponentFixture<HouseRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseRentalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HouseRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
