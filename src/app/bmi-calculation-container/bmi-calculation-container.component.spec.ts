import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalculationContainerComponent } from './bmi-calculation-container.component';

describe('BmiCalculationContainerComponent', () => {
  let component: BmiCalculationContainerComponent;
  let fixture: ComponentFixture<BmiCalculationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiCalculationContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiCalculationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
