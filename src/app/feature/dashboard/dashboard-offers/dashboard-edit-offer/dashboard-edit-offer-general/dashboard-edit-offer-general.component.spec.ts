import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEditOfferGeneralComponent } from './dashboard-edit-offer-general.component';

describe('DashboardEditOfferGeneralComponent', () => {
  let component: DashboardEditOfferGeneralComponent;
  let fixture: ComponentFixture<DashboardEditOfferGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEditOfferGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEditOfferGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
