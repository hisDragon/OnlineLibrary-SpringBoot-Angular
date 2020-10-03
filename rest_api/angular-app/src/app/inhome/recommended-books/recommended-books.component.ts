import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recommended-books',
  templateUrl: './recommended-books.component.html',
  styleUrls: ['./recommended-books.component.css']
})
export class RecommendedBooksComponent implements OnInit {

  

  books_details : any = [
    // { img_path : '../../../assets/textbooks/dbms/img.jpg',pdf_path:'../../assets/textbooks/dbms/text_book.pdf'},
    // {
    //   img_path : '../../../assets/textbooks/aptitude/img.jpg',pdf_path:'../../assets/textbooks/aptitude/text_book.pdf'
    // },
    // {
    //   img_path : '../../../assets/textbooks/oop/img.jpg',pdf_path:'../../assets/textbooks/oop/text_book.pdf'
    // },
    // {
    //   img_path : '../../../assets/textbooks/atc/img.jpg',pdf_path:'../../assets/textbooks/atc/text_book.pdf'
    // },
    // {
    //   img_path : '../../../assets/textbooks/ds/img.jpg',pdf_path:'../../assets/textbooks/ds/text_book.pdf'
    // },
    // {
    //   img_path : '../../../assets/textbooks/dc/img.jpg',pdf_path:'../../assets/textbooks/dc/text_book.pdf'
    // },
    // {
    //   img_path : '../../../assets/textbooks/os/img.jpg',pdf_path:'../../assets/textbooks/os/text_book.pdf'
    // },
    // {
    //   img_path : '../../../assets/textbooks/dbms/img.jpg',pdf_path:'../../assets/textbooks/dbms/text_book.pdf'
    // }
  
    { img_path: '../../../assets/img/714tSjSc4RL.jpg', pdf_path: '../../../assets/pdf/competitive-programming.pdf' },
    { img_path: '../../../assets/img/714tSjSc4RL.jpg', pdf_path: '../../../assets/pdf/css3-cheatsheets.pdf' },
    { img_path: '../../../assets/img/714tSjSc4RL.jpg', pdf_path: '../../../assets/pdf/html5-cheatsheet.pdf' },
    { img_path: '../../../assets/img/714tSjSc4RL.jpg', pdf_path: '../../../assets/pdf/Java 2 Core Language Little Black Book.pdf' }

  ];

  constructor() { }

  

  ngOnInit(): void {
  }

  openNewTab(index): void {
    window.open(this.books_details[index].pdf_path);
  }

}
