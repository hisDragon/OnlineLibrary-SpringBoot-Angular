import { Injectable } from '@angular/core';

// http requests
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// user interface
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url: string = "http://localhost:8080/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser> {
    return this.http.get<IUser>(this._url);
  }

}
