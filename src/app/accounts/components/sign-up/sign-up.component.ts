import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  username:string = '';
  password:string = '';
  email:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.username + " " + this.password + " " + this.email);
  }

  clear() {
    this.username = '';
    this.password = '';
    this.email = '';
  }

}
