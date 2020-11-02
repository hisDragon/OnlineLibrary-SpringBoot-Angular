import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recommended-books',
  templateUrl: './recommended-books.component.html',
  styleUrls: ['./recommended-books.component.css']
})
export class RecommendedBooksComponent implements OnInit {

  

  books_details : any = [
    { img_path : '../../../assets/forest.jpg', pdf_path:'../../assets/html5-cheatsheet.pdf'},
    {
      img_path : '../../../assets/forest.jpg', pdf_path:'../../assets/html5-cheatsheet.pdf'
    },
    {
      img_path : '../../../assets/forest.jpg', pdf_path:'../../assets/html5-cheatsheet.pdf'
    },
    {
      img_path : '../../../assets/forest.jpg', pdf_path:'../../assets/html5-cheatsheet.pdf'
    },
    {
      img_path : '../../../assets/forest.jpg', pdf_path:'../../assets/html5-cheatsheet.pdf'
    },
    {
      img_path : '../../../assets/forest.jpg', pdf_path:'../../assets/html5-cheatsheet.pdf'
    },
    {
      img_path : '../../../assets/forest.jpg', pdf_path:'../../assets/html5-cheatsheet.pdf'
    },
    {
      img_path : '../../../assets/forest.jpg', pdf_path:'../../assets/html5-cheatsheet.pdf'
    }

  ];

  constructor() { }

  

  ngOnInit(): void {
  }

  openNewTab(index): void {
    window.open(this.books_details[index].pdf_path);
  }

}
