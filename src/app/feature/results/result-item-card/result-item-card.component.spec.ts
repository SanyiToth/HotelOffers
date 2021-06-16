import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultItemCardComponent } from './result-item-card.component';

describe('ResultItemCardComponent', () => {
  let component: ResultItemCardComponent;
  let fixture: ComponentFixture<ResultItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultItemCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
