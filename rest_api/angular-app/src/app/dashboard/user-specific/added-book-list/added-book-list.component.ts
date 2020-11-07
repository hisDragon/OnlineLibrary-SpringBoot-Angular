import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-added-book-list',
  templateUrl: './added-book-list.component.html',
  styleUrls: ['./added-book-list.component.css']
})
export class AddedBookListComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

}
