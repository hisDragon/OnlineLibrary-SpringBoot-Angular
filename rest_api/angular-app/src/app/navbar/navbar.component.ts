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

  public books : IBook[] ;

  constructor(public userService: UserService, private bookService: BookService,private router: Router) { }


  ngOnInit(): void {
  }

  onLogout(): void{
    this.userService.isLoggedIn = false;
    this.userService.userInfo = null;
    this.router.navigate(['']);
  }

  onSearch(): void {
    this.bookService.getBooks().subscribe(
      res => {
        this.bookService.books = res;
        this.router.navigate(['/book-list']);
      },
      error => console.log(error)
    )
  }

}
