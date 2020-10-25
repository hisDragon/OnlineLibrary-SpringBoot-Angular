import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  private _emailUrl: string = "http://localhost:8080/sendEmail/";

  email: string = "";

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onSend(): void {
    let sendUrl: string = this._emailUrl + this.email; // http://localhost:8080/sendEmail/a@a.com

    // headers
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    let options = { headers: headers };

    this.httpClient.post(sendUrl, null, options).subscribe(
      user => {
        if(user){
          // if the object returned is not null then password is successfully saved
          alert("Password Sent!, Login to Continue.");
          this.router.navigate(['/login']);
        }else{
          // object is null email is not present in the database
          alert("Email Invalid, Please Register to Continue.");
          this.router.navigate(['/register']);
        }
      },
      error => console.log(error)
    );

  }

}
