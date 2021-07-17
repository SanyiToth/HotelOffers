import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewOfferFormComponent } from './dashboard-new-offer-form.component';

describe('DashboardNewOfferFormComponent', () => {
  let component: DashboardNewOfferFormComponent;
  let fixture: ComponentFixture<DashboardNewOfferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNewOfferFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewOfferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
