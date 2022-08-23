import { Component } from '@angular/core';

@Component({
  selector: 'bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  bmi = 0;
  height: number = 0;
  mass: number = 0;

  setHeight(height:string) {
    this.height = parseInt(height);
  }

  setMass(mass:string) {
    this.mass = parseInt(mass);
  }

  calcBMI() {
    this.bmi = this.mass / (this.height * this.height) * 10000;
  }

  clear() {
    this.bmi = 0;
    this.mass = 0;
    this.height = 0;
  }
  
}
