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
  userAvatar: string = this.userService.userInfo.userAvatar;

  addedBooks: number[] = this.userService.userInfo.addedBooks;

  borrowedBook: IBook = null;

  constructor(private userService : UserService, 
    private bookService: BookService,
    private router: Router
    ) { }

  ngOnInit(): void {

    if(this.userService.userInfo.borrowedBookId === 0){
      // not borrowed any book
      console.log("In IF");
      this.borrowedBook = null;
    }else{
      // book is borrowed
      console.log("In ELSE");
      this.bookService.getBookById(this.userService.userInfo.borrowedBookId).subscribe(
        (book: IBook) => {
          console.log(book);
          this.borrowedBook = {} as IBook;
          this.borrowedBook = book;
        },
        err => console.log(err)
      );
    }

  }

}
