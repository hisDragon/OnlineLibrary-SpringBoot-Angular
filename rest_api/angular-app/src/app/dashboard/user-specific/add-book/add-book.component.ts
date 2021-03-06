import { Component, OnInit } from '@angular/core';

// http
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookService } from '../../../services/book.service';

import { IBook } from '../../../models/IBook';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookName: string = '';
  bookAuthor: string = '';
  bookCategory: string = '';
  bookImage: File = null;
  bookPdf: File = null;

  constructor(
    private http: HttpClient,
    private bookService: BookService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  uploadSubmit(): void {
    if( this.bookName === '' || 
        this.bookAuthor === '' || 
        this.bookCategory === '' || 
        this.bookImage === null || 
        this.bookPdf === null 
    ) {
          alert("You've missed one/some of the fields");
    }else{
      this.uploadService().subscribe(
        res => {
          let data: IBook = {
            bookId: 1,
            bookName: this.bookName,
            bookPath: 'assets/books/categories/' + this.bookCategory + '/pdf/' + this.bookName + '.' + this.bookPdf.name.split('.').pop(),
            bookImagePath: 'assets/books/categories/' + this.bookCategory + '/img/' + this.bookName + '.' + this.bookImage.name.split('.').pop(),
            bookCategory: this.bookCategory,
            isBookFree: false,
            authors: [
              { authorName: this.bookAuthor, authorId: 1, books: null }
            ]
          }
    
          let ignoreList = [ 'bookId' ]; // ignoring ID attribute because it is automatically generated by Spring data JPA
          function replacer(key, value){if (ignoreList.indexOf(key) > -1) return undefined;else return value;}
          let book = JSON.stringify(data, replacer);
    
          this.bookService.postBooks(book).subscribe(
            (resBook: IBook) => {
              let user: IUser = {
                userId: this.userService.userInfo.userId,
                userName: this.userService.userInfo.userName,
                userAvatar: this.userService.userInfo.userAvatar,
                userPhone: this.userService.userInfo.userPhone,
                userEmail: this.userService.userInfo.userEmail,
                userPassword: this.userService.userInfo.userPassword,
                addedBooks: []
              };

              user.addedBooks[0] = resBook.bookId;
              

              let ignoreList = [ 'userId' ]; // ignoring ID attribute because it is automatically generated by Spring data JPA
              function replacer(key, value){if (ignoreList.indexOf(key) > -1) return undefined;else return value;}
              let userUpdate = JSON.stringify(user, replacer);

              this.userService.postUsers(userUpdate).subscribe(
                (resUser: IUser) => {
                  this.userService.userInfo = resUser;
                  alert("Thank You!");
                },
                err => console.log(err)
              );
            },
            err => console.log(err)
          );
        },
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

    const imgName: string = this.bookName + '.' + this.bookImage.name.split('.').pop();
    const pdfName: string = this.bookName + '.' + this.bookPdf.name.split('.').pop();

    formData.append('img', this.bookImage, imgName);
    formData.append('file', this.bookPdf, pdfName);

    const uploadUrl: string = "http://localhost:8080/files/upload/" + this.bookCategory; // add category at the end

    return this.http.post(uploadUrl, formData, { responseType: "text" }); // no headers required as { 'Content-Type': multipart/formdata } is default
  }
  
}
