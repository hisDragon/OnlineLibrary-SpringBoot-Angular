import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { BookService } from '../services/book.service';
import { IBook } from '../models/IBook';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public books : IBook[] = [];

  constructor(public userService: UserService, private bookService: BookService, private router: Router) { }


  ngOnInit(): void {
  }

  onLogout(): void{
    this.userService.isLoggedIn = false;
    this.userService.userInfo = null;
    this.router.navigate(['']);
  }

  onSearch(): void {
    let searchString: string = (document.getElementById("search") as HTMLInputElement).value;
    this.bookService.getBooksByName(searchString.toString()).subscribe(
      res => {
        this.books[0] = res;
        this.bookService.books = this.books;
        this.router.navigate(['/book-list']);
      },
      error => {
        this.books.pop();
        console.log("No Book Searched");
        this.router.navigate(['/book-list']);
      }
    )
  }

}
