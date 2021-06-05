import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingFormComponent } from './heading-form.component';

describe('HeadingFormComponent', () => {
  let component: HeadingFormComponent;
  let fixture: ComponentFixture<HeadingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
