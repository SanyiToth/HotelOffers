import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEditOfferDetailedComponent } from './dashboard-edit-offer-detailed.component';

describe('DashboardEditOfferDetailedComponent', () => {
  let component: DashboardEditOfferDetailedComponent;
  let fixture: ComponentFixture<DashboardEditOfferDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEditOfferDetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEditOfferDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
