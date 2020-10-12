import { Component, OnInit } from '@angular/core';

import { IBook } from 'src/app/models/IBook'; // book model
import { BookService } from 'src/app/services/book.service'; // book service

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  // injecting book service dependency
  constructor(private bookService: BookService) { }

  books: IBook[]; // generalization for later

  art_books : IBook[] = [
    // { img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'},
    // {
    //   img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    // },
    // {
    //   img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    // }
  ];

  
  isArtVisible : boolean = false;
  isSocialVisible : boolean = false;
  isScienceVisible : boolean = false;
  isRomanceVisible : boolean = false;
  isGeographyVisible : boolean = false;
  isHistoryVisible : boolean = false; 
  isNovelVisible :boolean = false;

  init() : void {

    
    this.isArtVisible = false;
    this.isSocialVisible = false;
    this.isScienceVisible  = false;
    this.isRomanceVisible  = false;
    this.isGeographyVisible  = false;
    this.isHistoryVisible  = false; 
    this.isNovelVisible = false;
  }

  ngOnInit(): void {
  }
  
  artVisible() : void {

    this.books = [];
    this.bookService.getBooksByCategory("art").subscribe(
      books => {
        this.books = books;
      },
      error => console.log("Error", error)
    );

    this.init();
    this.isArtVisible = true;
  }

  socialVisible() : void {
    this.books = [];
    this.bookService.getBooksByCategory("social").subscribe(
      books => {
        this.books = books;
      },
      error => console.log("Error", error)
    );
    this.init();
    this.isSocialVisible = true;
  }

  scienceVisible() : void {
    this.books = [];
    this.bookService.getBooksByCategory("science").subscribe(
      books => {
        this.books = books;
      },
      error => console.log("Error", error)
    );
    this.init();
    this.isScienceVisible = true;
  }

  romanceVisible() : void {
    this.books = [];
    this.bookService.getBooksByCategory("romance").subscribe(
      books => {
        this.books = books;
      },
      error => console.log("Error", error)
    );
    this.init();
    this.isRomanceVisible = true;
  }

  geographyVisible() : void {
    this.books = [];
    this.bookService.getBooksByCategory("geography").subscribe(
      books => {
        this.books = books;
      },
      error => console.log("Error", error)
    );
    this.init();
    this.isGeographyVisible = true;
  }

  historyVisible() : void {
    this.books = [];
    this.bookService.getBooksByCategory("history").subscribe(
      books => {
        this.books = books;
      },
      error => console.log("Error", error)
    );
    this.init();
    this.isHistoryVisible = true;
  }

  novelVisible() : void {
    this.books = [];
    this.bookService.getBooksByCategory("novel").subscribe(
      books => {
        this.books = books;
      },
      error => console.log("Error", error)
    );
    this.init();
    this.isNovelVisible = true;
    
  }

  // opening pdf in a new tab
  openNewTab(index: number): void {
    window.open(this.books[index].bookPath);
  }
  
}
