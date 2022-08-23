import { Component } from '@angular/core';

@Component({
  selector: 'bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  bmi = 0;
  height = 0;
  mass = 0;

  setHeight(height:string) {
    this.height = parseInt(height);
  }

  setMass(mass:string) {
    this.mass = parseInt(mass);
  }

  calcBMI() {
    this.bmi = this.mass / (this.height * this.height) * 10000;
  }
  
}
