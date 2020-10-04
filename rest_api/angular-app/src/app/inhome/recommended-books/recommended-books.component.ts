import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recommended-books',
  templateUrl: './recommended-books.component.html',
  styleUrls: ['./recommended-books.component.css']
})
export class RecommendedBooksComponent implements OnInit {

  

  books_details : any = [
    { img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'},
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    },
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    },
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    },
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    },
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    },
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    },
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    }
  
    // { img_path: '../../../assets/img/714tSjSc4RL.jpg', pdf_path: '../../../assets/pdf/competitive-programming.pdf' },
    // { img_path: '../../../assets/img/714tSjSc4RL.jpg', pdf_path: '../../../assets/pdf/css3-cheatsheets.pdf' },
    // { img_path: '../../../assets/img/714tSjSc4RL.jpg', pdf_path: '../../../assets/pdf/html5-cheatsheet.pdf' },
    // { img_path: '../../../assets/img/714tSjSc4RL.jpg', pdf_path: '../../../assets/pdf/Java 2 Core Language Little Black Book.pdf' }

  ];

  constructor() { }

  

  ngOnInit(): void {
  }

  openNewTab(index): void {
    window.open(this.books_details[index].pdf_path);
  }

}
