import { Injectable } from '@angular/core';

// sending req and getting respose from api
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from '../models/IBook';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public books: IBook[];

  private _url: string = "http://localhost:8080/books/"; // url for backend rest api

  // http client dependency
  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<IBook[]> {
    let get_url = this._url + "all/";
    return this.httpClient.get<IBook[]>(get_url);
  }

  getBookById(id: number): Observable<IBook> {
    let getById_url = this._url + "id/" + id.toString();
    return this.httpClient.get<IBook>(getById_url);
  }

  getBookByIds(ids: number[]): Observable<IBook[]> {
    let getAllByIds_url: string = this._url + "ids?id=";
    for(let i = 0; i < ids.length; ++i){
      if(i == ids.length - 1) getAllByIds_url += ids[i].toString()
      else{
        getAllByIds_url += ids[i].toString()
        getAllByIds_url += ","
      }
    }

    return this.httpClient.get<IBook[]>(getAllByIds_url);
  }

  getBooksByName(name: string): Observable<any>{
    let getByName_url = this._url + "name/" + name;
    return this.httpClient.get<IBook>(getByName_url);
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
