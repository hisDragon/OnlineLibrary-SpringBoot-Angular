import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recommended-books',
  templateUrl: './recommended-books.component.html',
  styleUrls: ['./recommended-books.component.css']
})
export class RecommendedBooksComponent implements OnInit {

  

  books_details : any = [
    { img_path : '../../../assets/forest.png', pdf_path:'../../assets/dummy.pdf'},
    {
      img_path : '../../../assets/forest.png', pdf_path:'../../assets/dummy.pdf'
    },
    {
      img_path : '../../../assets/forest.png', pdf_path:'../../assets/dummy.pdf'
    },
    {
      img_path : '../../../assets/forest.png', pdf_path:'../../assets/dummy.pdf'
    },
    {
      img_path : '../../../assets/forest.png', pdf_path:'../../assets/dummy.pdf'
    },
    {
      img_path : '../../../assets/forest.png', pdf_path:'../../assets/dummy.pdf'
    },
    {
      img_path : '../../../assets/forest.png', pdf_path:'../../assets/dummy.pdf'
    },
    {
      img_path : '../../../assets/forest.png', pdf_path:'../../assets/dummy.pdf'
    }

  ];

  constructor() { }

  

  ngOnInit(): void {
  }

  openNewTab(index): void {
    window.open(this.books_details[index].pdf_path);
  }

}
