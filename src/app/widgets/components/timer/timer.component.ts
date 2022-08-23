import { Component } from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  mass = 0;
  height = 0;
  bmi = 0;

  calcBMI() {
    this.bmi = this.mass / (this.height * this.height) * 10000;
  }
  
}
