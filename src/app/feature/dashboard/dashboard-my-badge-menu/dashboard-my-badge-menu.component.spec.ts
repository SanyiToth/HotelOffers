import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMyBadgeMenuComponent } from './dashboard-my-badge-menu.component';

describe('DashboardMyBadgeMenuComponent', () => {
  let component: DashboardMyBadgeMenuComponent;
  let fixture: ComponentFixture<DashboardMyBadgeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMyBadgeMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMyBadgeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
