import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  art_books : any = [
    { img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'},
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    },
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    }
  ];

  history_books : any = [
    { img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'},
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    },
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    }
  ];

  novel_books : any = [
    { img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'},
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    },
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    }
  ];

  romance_books : any = [
    { img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'},
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    },
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    }
  ];

  geography_books : any = [
    { img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'},
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    },
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    }
  ];

  science_books : any = [
    { img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'},
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    },
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    }
  ];

  social_books : any = [
    { img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'},
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    },
    {
      img_path : '../../../assets/forest_fog_trees_126479_5100x6600.jpg',pdf_path:'../../assets/html5-cheatsheet.pdf'
    }
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
    
    this.init();
    this.isArtVisible = true;
  }

  socialVisible() : void {
    this.init();
    this.isSocialVisible = true;
  }

  scienceVisible() : void {
    this.init();
    this.isScienceVisible = true;
  }

  romanceVisible() : void {
    this.init();
    this.isRomanceVisible = true;
  }

  geographyVisible() : void {
    this.init();
    this.isGeographyVisible = true;
  }

  historyVisible() : void {
    this.init();
    this.isHistoryVisible = true;
  }

  novelVisible() : void {
    this.init();
    this.isNovelVisible = true;
    
  }
}
