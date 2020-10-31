import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from '../models/IBook';
import { IUser } from '../models/IUser';
import { BookService } from '../services/book.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {

  book: IBook = {} as IBook;
  user: IUser = {} as IUser;

  isBookAvailable: boolean = false;

  constructor(
    private bookService: BookService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.book = this.bookService.books[0];
    this.userService.getById(this.book.borrowerId).subscribe(
      res => {
        this.user = res;
        this.isBookAvailable =  this.bookService.books[0].borrowerId === this.userService.userInfo.userId;
      },
      err => console.log(err)
    );
  }

  onReturn(): void {
    this.book.authors = [];
    this.book.borrowerId = 0;
    this.bookService.books = [];
    this.bookService.postBooks(this.book).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    this.router.navigate(['/']);
  }

}
