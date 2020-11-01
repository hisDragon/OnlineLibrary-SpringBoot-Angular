import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service'
import { IBook } from '../models/IBook'
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
 

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  mybooks: IBook[];

	constructor(
    private bookService: BookService,
    private router: Router,
    private userService: UserService){}
  
  ngOnInit(): void {
    this.mybooks = this.bookService.books;
  }

  openNewTab(index): void {
    window.open(this.mybooks[index].bookPath);
  }

  onBorrow(): void {
    if(this.userService.isLoggedIn){
      // user is logged in
      if(this.bookService.books[0].borrowerId === 0){
        console.log("INSIDE IF");
        // book is not yet borrowed
        // book can be borrowed
        let book: IBook = this.mybooks[0];
        book.borrowerId = this.userService.userInfo.userId;
        book.authors = [];
        this.bookService.postBooks(book).subscribe(
          res => {
            this.bookService.books[0] = res;
            this.router.navigate(['/borrow']);
          },
          err => {
            console.log("Error: ", err);
          }
        );
      }else{
        // book is borrowed
        console.log("INSIDE ELSE");
        this.router.navigate(['/borrow']);
      }
    }else{
      // not logged in
      this.router.navigate(['/login']);
    }
  }

}
