import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BmiItemModel } from 'src/app/models/bmiitem.model';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  result: number = 0;
  height: number = 0;
  mass: number = 0;
  @Output()
  resultCalculated = new EventEmitter<BmiItemModel>();

  setHeight(height:string) {
    this.height = parseInt(height);
  }

  setMass(mass:string) {
    this.mass = parseInt(mass);
  }

  calcBMI() {
    this.result = this.mass / (this.height * this.height) * 10000;
    this.resultCalculated.emit(
      new BmiItemModel(this.height, this.mass, this.result)
    );
  }

  clear() {
    this.result = 0;
    this.mass = 0;
    this.height = 0;
  }

}
