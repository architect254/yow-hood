import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRentalsComponent } from './home-rentals.component';

describe('HomeRentalsComponent', () => {
  let component: HomeRentalsComponent;
  let fixture: ComponentFixture<HomeRentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRentalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
