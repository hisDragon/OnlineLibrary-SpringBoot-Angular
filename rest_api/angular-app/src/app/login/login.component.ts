import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public password_set :string="";
  public password_confirm :string="";
  constructor() { }

  ngOnInit(): void {
  }
  userModel = new User('','');
}
