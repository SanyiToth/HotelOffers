import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOffersHeaderComponent } from './dashboard-offers-header.component';

describe('DashboardOffersHeaderComponent', () => {
  let component: DashboardOffersHeaderComponent;
  let fixture: ComponentFixture<DashboardOffersHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardOffersHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOffersHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
