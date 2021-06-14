import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultItemListComponent } from './result-item-list.component';

describe('ResultItemListComponent', () => {
  let component: ResultItemListComponent;
  let fixture: ComponentFixture<ResultItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
