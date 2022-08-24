import { Component, OnInit } from '@angular/core';
import { BmiItemModel } from '../models/bmiitem.model';

@Component({
  selector: 'app-bmi-calculation-container',
  templateUrl: './bmi-calculation-container.component.html',
  styleUrls: ['./bmi-calculation-container.component.css']
})
export class BmiCalculationContainerComponent implements OnInit {

  constructor() {}
  bmiData = new BmiItemModel(0,0,0);
  ngOnInit(): void {}

  onBmiresultCalculated(data: BmiItemModel) {
    this.bmiData = data;
  }

}
