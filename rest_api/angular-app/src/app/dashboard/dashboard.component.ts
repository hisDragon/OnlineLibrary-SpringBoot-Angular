import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userName: string = this.userService.userInfo.userName;
  userPhone: string = this.userService.userInfo.userPhone;
  userEmail: string = this.userService.userInfo.userEmail;
  userId: number = this.userService.userInfo.userId;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }


}
