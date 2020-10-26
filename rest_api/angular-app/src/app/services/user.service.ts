import { Injectable } from '@angular/core';

// http requests
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// user interface
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _isLoggedIn: boolean = false;
  userInfo: IUser;

  get isLoggedIn(): boolean{
    return !!this._isLoggedIn;
  }

  set isLoggedIn(value: boolean){
    this._isLoggedIn = value;
  }

  // backend rest api
  private _url: string = "http://localhost:8081/users/";

  constructor(private http: HttpClient) { }

  // getting all users
  getUsers(): Observable<IUser> {
    let get_url = this._url + 'all/';
    return this.http.get<IUser>(get_url);
  }

  // getting users by email
  getByEmail(email: string): Observable<IUser> {
    let getByEmail_url = this._url + "email/" + email;
    return this.http.get<IUser>(getByEmail_url);
  }

  // posting user to backend rest api
  postUsers(requestBody): Observable<any> {
    let post_url = this._url + 'addUser/';

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    let options = { headers: headers };

    return this.http.post(post_url, requestBody, options);
  }

}
