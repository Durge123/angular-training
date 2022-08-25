import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { BmiCalculationContainerComponent } from 'src/app/bmi-calculation-container/bmi-calculation-container.component';
import { BmiItemModel } from 'src/app/models/bmiitem.model';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {

  bmiContainer: BmiCalculationContainerComponent

  constructor(@Inject("bmi-container") _bmiContainer:BmiCalculationContainerComponent) { 
    this.bmiContainer = _bmiContainer;
   }

  ngOnInit(): void {
  }

  result: number = 0;
  height: number = 0;
  mass: number = 0;
  @Output()
  resultCalculated = new EventEmitter<BmiItemModel>();

  @Input()
  bmiResult: number = 0;

  setHeight(height:string) {
    this.height = parseInt(height);
  }

  setMass(mass:string) {
    this.mass = parseInt(mass);
  }

  calcBMI() {
    //this.bmiContainer.bmiCalculatedData(this.height, this.mass);
    this.resultCalculated.emit(
      new BmiItemModel(this.height, this.mass, this.result)
    );
  }

  clear() {
    this.result = 0;
    this.mass = 0;
    this.height = 0;
    this.bmiResult = 0;
  }

}
