import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalculationHistoryComponent } from './bmi-calculation-history.component';

describe('BmiCalculationHistoryComponent', () => {
  let component: BmiCalculationHistoryComponent;
  let fixture: ComponentFixture<BmiCalculationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiCalculationHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiCalculationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
