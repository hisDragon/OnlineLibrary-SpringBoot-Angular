import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup = new FormGroup({

    newpassword: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(8)])
    ),
    repassword: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(8)])
    ),
    cpassword: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(8)])
    )

  });

  constructor() { }

  ngOnInit(): void {
  }

}
