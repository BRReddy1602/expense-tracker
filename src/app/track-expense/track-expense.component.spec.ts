import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackExpenseComponent } from './track-expense.component';

describe('TrackExpenseComponent', () => {
  let component: TrackExpenseComponent;
  let fixture: ComponentFixture<TrackExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
