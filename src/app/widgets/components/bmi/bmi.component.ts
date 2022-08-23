import { Component } from '@angular/core';

@Component({
  selector: 'bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  bmi = 0;

  calcBMI() {
    let mass:any = (<HTMLInputElement>document.getElementById('mass')).value;
    let height:any = (<HTMLInputElement>document.getElementById('height')).value;
    this.bmi = mass / (height * height) * 10000;
  }
  
}
