import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../models/IUser';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-update-dashboard',
  templateUrl: './update-dashboard.component.html',
  styleUrls: ['./update-dashboard.component.css']
})
export class UpdateDashboardComponent implements OnInit {

  userName: string = this.userService.userInfo.userName;
  userPhone: string = this.userService.userInfo.userPhone;
  userAvatar: string = this.userService.userInfo.userAvatar;

  avatarImageFile: File = null;

  public newPhoneNumber = "";
  public newName = "";

  constructor(
    public userService: UserService,
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit() : void {
    if(this.avatarImageFile === null){
      // avatar not uploaded
      let user: IUser = {
        userId: this.userService.userInfo.userId,
        userName: this.newName === "" ? this.userService.userInfo.userName : this.newName,
        userPhone: this.newPhoneNumber === "" ? this.userService.userInfo.userPhone : this.newPhoneNumber,
        userAvatar: this.userService.userInfo.userAvatar,
        userEmail: this.userService.userInfo.userEmail,
        userPassword: this.userService.userInfo.userPassword
      };

      this.userService.postUsers(user).subscribe(
        (res: IUser) => {
          console.log(res);
          this.userService.userInfo = res;
          alert("Info Updated");
          this.router.navigate(['/dashboard']);
        },
        err => console.log(err)
      );

    }else{
      // avatar uploaded
      this.uploadService().subscribe(
        success => {
          let user: IUser = {
            userId: this.userService.userInfo.userId,
            userName: this.newName === "" ? this.userService.userInfo.userName : this.newName,
            userPhone: this.newPhoneNumber === "" ? this.userService.userInfo.userPhone : this.newPhoneNumber,
            userAvatar: "assets/avatars/" + this.userService.userInfo.userId.toString() + '.' + this.avatarImageFile.name.split('.').pop(),
            userEmail: this.userService.userInfo.userEmail,
            userPassword: this.userService.userInfo.userPassword
          };

          this.userService.postUsers(user).subscribe(
            (res: IUser) => {
              console.log(res);
              this.userService.userInfo = res;
              alert("Info Updated");
              this.router.navigate(['/dashboard']);
            },
            err => console.log(err)
          );
        },
        err => console.log(err)
      );
    }
  }

  onAvatarSelected(files: FileList): void {
    if(files.length > 1){
      alert("Upload a single file for Image");
    }else{
      this.avatarImageFile = files.item(0);
    }
  }

  uploadService(): Observable<any> {

    const formData: FormData = new FormData();

    const avatarName: string = this.userService.userInfo.userId.toString() 
                                + "." 
                                + this.avatarImageFile.name.split('.').pop(); // 11111.jpeg

    formData.append('userAvatar', this.avatarImageFile, avatarName);

    const uploadUrl: string = "http://localhost:8080/files/upload/avatar/";

    return this.http.post(uploadUrl, formData, { responseType: "text" });
  }

}
