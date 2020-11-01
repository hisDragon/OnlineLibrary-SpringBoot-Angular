import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from '../models/IBook';
import { BookService } from '../services/book.service';
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

  borrowedBook: IBook = null;

  constructor(private userService : UserService, 
    private bookService: BookService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.bookService.getBooks().subscribe(
      (res: IBook[]) => {
        res.forEach((book) => {
          if(book.borrowerId === this.userId){
            this.borrowedBook = {} as IBook;
            this.borrowedBook = book;
          }
        });
      },
      err => console.log(err)
    );

  }

}
