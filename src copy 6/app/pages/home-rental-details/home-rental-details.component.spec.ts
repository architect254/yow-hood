import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRentalDetailsComponent } from './home-rental-details.component';

describe('HomeRentalDetailsComponent', () => {
  let component: HomeRentalDetailsComponent;
  let fixture: ComponentFixture<HomeRentalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRentalDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeRentalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
