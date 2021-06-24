import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOfferListComponent } from './dashboard-offer-list.component';

describe('DashboardOfferListComponent', () => {
  let component: DashboardOfferListComponent;
  let fixture: ComponentFixture<DashboardOfferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardOfferListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOfferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
