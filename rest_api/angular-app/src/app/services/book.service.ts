import { Injectable } from '@angular/core';

// sending req and getting respose from api
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from '../models/IBook';

@Injectable({
  providedIn: 'root'
})
export class BookService {

   books: IBook[];

  private _url: string = "http://localhost:8080/books/"; // url for backend rest api

  // http client dependency
  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<IBook[]> {
    let get_url = this._url + "all/";
    return this.httpClient.get<IBook[]>(get_url);
  }

  getBooksByCategory(category: string): Observable<IBook[]> {
    let getByCategory_url = this._url + "category/" + category;
    return this.httpClient.get<IBook[]>(getByCategory_url);
  }

  postBooks(book): Observable<any> {

    let postUrl = this._url + "addBook/";

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    let options = { headers: headers };

    return this.httpClient.post(postUrl, book, options);
  }

}
