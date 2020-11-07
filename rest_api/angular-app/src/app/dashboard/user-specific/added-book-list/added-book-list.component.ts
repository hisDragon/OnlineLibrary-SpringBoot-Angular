import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from 'src/app/models/IBook';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-added-book-list',
  templateUrl: './added-book-list.component.html',
  styleUrls: ['./added-book-list.component.css']
})
export class AddedBookListComponent implements OnInit {

  addedBooks: IBook[] = [];

  constructor(
    private userService: UserService,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const ids: number[] = this.userService.userInfo.addedBooks;
    this.bookService.getBookByIds(ids).subscribe(
      (books: IBook[]) => {
        console.log(books);
        this.addedBooks = books;
      },
      err => console.log(err)
    );
  }

}
