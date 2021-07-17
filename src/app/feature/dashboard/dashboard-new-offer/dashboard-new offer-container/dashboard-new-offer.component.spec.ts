import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewOfferComponent } from './dashboard-new-offer.component';

describe('DashboardNewOfferComponent', () => {
  let component: DashboardNewOfferComponent;
  let fixture: ComponentFixture<DashboardNewOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNewOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
