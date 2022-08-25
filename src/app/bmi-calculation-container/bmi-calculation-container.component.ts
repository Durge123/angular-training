import { Component, Inject, Injectable, OnInit, ViewChild } from '@angular/core';
import { BmiCalculationHistoryComponent } from '../bmiCalculationContainer/bmi-calculation-history/bmi-calculation-history.component';
import { BmiItemModel } from '../models/bmiitem.model';
import { BmiCalculatorService } from '../services/bmiCalculator.service';
import { ConsoleLoggerService } from '../services/consoleLogger.service';

@Component({
  selector: 'app-bmi-calculation-container',
  templateUrl: './bmi-calculation-container.component.html',
  styleUrls: ['./bmi-calculation-container.component.css']
})
@Injectable()
export class BmiCalculationContainerComponent implements OnInit {

  private bmiCalculator: BmiCalculatorService;
  private logger: ConsoleLoggerService;
  
  constructor(_bmiCalculator:BmiCalculatorService, @Inject('logger') _logger:ConsoleLoggerService) {
    this.bmiCalculator = _bmiCalculator
    this.logger = _logger;
  }

  bmiData = new BmiItemModel(0,0,0);
  bmiResultValue: number = 0;
  @ViewChild('bmiCHS')
  historyViewChild: BmiCalculationHistoryComponent;

  ngOnInit(): void {}

  onBmiresultCalculated(data: BmiItemModel) {
    this.bmiData = data;

    this.bmiCalculator.calculate(data.height, data.mass).subscribe((value: any) => {
      this.logger.write(value.result);
      this.bmiResultValue = value.result;
      this.bmiData.result = this.bmiResultValue;
      this.historyViewChild.showHistoryData();
    }, (err:any) => {
      this.logger.write(err);
    }, () => {
      this.logger.write("Complete");
    });
  }

  // bmiCalculatedData(height:number, mass:number): void {
  //   this.bmiCalculator.calculate(height, mass).subscribe((data: any) => {
  //     this.logger.write(data.result);
  //     this.bmiResultValue = data.result;
  //     this.bmiData.result = data.result;
  //   }, (err:any) => {
  //     this.logger.write(err);
  //   }, () => {
  //     this.logger.write("Complete");
  //   });
  // }

}
