import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/services/user/userdata.service';
import { UserModel } from 'src/app/components/Model/user-model';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {

  constructor(

    // private afAuth: AngularFireAuth,

    private router: Router,
    private readonly authService: SocialAuthService,
    private userApiService: UserdataService,

    private httpClient: HttpClient

  ) {

  }

  myemail: any = "default";

  ngOnInit() {

    this.authService.authState.subscribe(async (user: any) => {

      this.getAccessToken();

      let userData: UserModel = {
        firstName: user['fistName'],
        lastName: user['lastName'],
        Email: user['email'],
      };
      await this.userApiService.loginUser(userData.email);
      console.log('Token from state: ', user.authToken)
      this.myemail = user.email;
    });



  }

  onclick() {
    alert(this.myemail);
    console.log('authState user: ', this.myemail);
    this.userApiService.findUser(this.myemail).subscribe((abc: any) => {
      console.log("type of user: ", abc);
    })
  }

  accessToken = '';

  user: any;

  googleClientId = '848983964634-l65hjj1kfa82qm0uejmeebghric7njsk.apps.googleusercontent.com';

  getAccessToken(): void {

    console.log('getAccessToken')

    this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => this.accessToken = accessToken);

  }

}
