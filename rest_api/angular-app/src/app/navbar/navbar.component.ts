import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) { }


  ngOnInit(): void {
  }

  onLogout(): void{
    this.userService.isLoggedIn = false;
    this.userService.userInfo = null;
    this.router.navigate(['']);
  }

}
