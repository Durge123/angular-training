import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmiCalculationHistoryComponent } from '../bmiCalculationContainer/bmi-calculation-history/bmi-calculation-history.component';
import { BmiCalculatorComponent } from '../bmiCalculationContainer/bmi-calculator/bmi-calculator.component';
import { FormsModule } from '@angular/forms';
import { BmiCalculationContainerComponent } from './bmi-calculation-container.component';
import { BmiCalculatorService } from '../services/bmiCalculator.service';



@NgModule({
  declarations: [
    BmiCalculationHistoryComponent,
    BmiCalculatorComponent,
    BmiCalculationContainerComponent
  ],
  exports: [BmiCalculationContainerComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    {useClass: BmiCalculationContainerComponent, provide:"bmi-container"},
    BmiCalculatorService
  ]
})
export class BmiCalculationContainerModule { }
