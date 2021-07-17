import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEditOfferContainerComponent } from './dashboard-edit-offer-container.component';

describe('DashboardEditOfferContainerComponent', () => {
  let component: DashboardEditOfferContainerComponent;
  let fixture: ComponentFixture<DashboardEditOfferContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEditOfferContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEditOfferContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
