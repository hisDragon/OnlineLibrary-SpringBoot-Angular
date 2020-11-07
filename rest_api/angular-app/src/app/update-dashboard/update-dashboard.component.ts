import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-update-dashboard',
  templateUrl: './update-dashboard.component.html',
  styleUrls: ['./update-dashboard.component.css']
})
export class UpdateDashboardComponent implements OnInit {

  userName: string = this.userService.userInfo.userName;
  userPhone: string = this.userService.userInfo.userPhone;

  public newPhoneNumber = "";
  public newName = "";

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() : void {
    console.log(this.newPhoneNumber);
    console.log(this.newName);
  }

}
