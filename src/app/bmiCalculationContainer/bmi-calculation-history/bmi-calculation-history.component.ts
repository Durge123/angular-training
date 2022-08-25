import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BmiItemModel } from 'src/app/models/bmiitem.model';
import { BmiCalculatorService } from 'src/app/services/bmiCalculator.service';

@Component({
  selector: 'app-bmi-calculation-history',
  templateUrl: './bmi-calculation-history.component.html',
  styleUrls: ['./bmi-calculation-history.component.css']
})
export class BmiCalculationHistoryComponent implements OnInit {

  constructor(private bmiService: BmiCalculatorService) {}
  @Input()
  bmiResultData = new BmiItemModel(0, 0, 0);
  bmiResultHistory: Array<any> = [];

  ngOnInit(): void {}
  // ngOnChanges(changes: SimpleChanges): void {
  //   if (!changes['bmiResultData'].firstChange) {
  //     this.bmiResultHistory.push(this.bmiResultData);
  //   }
  // }
  
  showHistoryData() {
    this.bmiService.showHistory().subscribe((data: any) => {
      console.log(data.bmiHistory)
      this.bmiResultHistory = data.bmiHistory;
    });
  }

}
