import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service'
import { IBook } from '../models/IBook'
 

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  mybooks: IBook[];

	constructor(private bookService: BookService){}
  
  ngOnInit(): void {
    this.mybooks = this.bookService.books;
    
    
  }

  openNewTab(index): void {
    window.open(this.mybooks[index].bookPath);
  }

}
