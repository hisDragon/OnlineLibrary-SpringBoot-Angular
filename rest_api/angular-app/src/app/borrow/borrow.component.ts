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

  isBookAvailable: boolean = false;

  constructor(
    private bookService: BookService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.book = this.bookService.books[0];
    this.isBookAvailable = this.book ? true : false;
  }

  onReturn(): void {
    let userUpdate: IUser = {
      userId: this.userService.userInfo.userId,
      userName: this.userService.userInfo.userName,
      userAvatar: this.userService.userInfo.userAvatar,
      userPhone: this.userService.userInfo.userPhone,
      userEmail: this.userService.userInfo.userEmail,
      userPassword: this.userService.userInfo.userPassword,
      addedBooks: [],
      borrowedBookId: 0
    };

    let ignoreList = [ 'userId' ]; // ignoring ID attribute because it is automatically generated by Spring data JPA
    function replacer(key, value){if (ignoreList.indexOf(key) > -1) return undefined;else return value;}
    let user = JSON.stringify(userUpdate, replacer);

    this.userService.postUsers(user).subscribe(
      (res: IUser) => {
        this.userService.userInfo = res;
        this.router.navigate(['/dashboard']);
      },
      err => console.log(err)
    );
  }

}
