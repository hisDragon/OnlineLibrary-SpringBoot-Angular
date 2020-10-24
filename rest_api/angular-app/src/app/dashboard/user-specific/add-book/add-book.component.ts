import { Component, OnInit } from '@angular/core';

// http
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookName: string = '';
  bookCategory: string = '';
  bookImage: File = null;
  bookPdf: File = null;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  uploadSubmit(event: Event): void {
    event.preventDefault();
    if( this.bookName === '' || 
        this.bookCategory === '' || 
        this.bookImage === null || 
        this.bookPdf === null 
    ) {
          alert("You've missed one of the fields");
    }else{
      this.uploadService().subscribe(
        res => console.log(res),
        err => console.log("Error", err)
      );

    }
  }

  onImageFileSelected(files: FileList): void {
    if(files.length > 1){
      alert("Upload a single file for Image");
    }else{
      this.bookImage = files.item(0);
    }
  }

  onPdfFileSelected(files: FileList): void {
    if(files.length > 1){
      alert("Upload a single file for Image");
    }else{
      this.bookPdf = files.item(0);
    }
  }

  uploadService(): Observable<any> {

    const formData: FormData = new FormData();
    formData.append('img', this.bookImage);
    formData.append('file', this.bookPdf);

    const uploadUrl: string = "http://localhost:8080/files/upload/" + this.bookCategory; // add category at the end

    return this.http.post(uploadUrl, formData); // no headers required as { 'Content-Type': multipart/formdata } is default
  }

}
