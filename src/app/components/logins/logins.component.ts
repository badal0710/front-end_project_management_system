import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {

  constructor(

    // private afAuth: AngularFireAuth,

    private router: Router, private readonly authService: SocialAuthService,

    private httpClient: HttpClient

  ) {

  }

  ngOnInit() {

    this.authService.authState.subscribe((user: any) => {

      this.getAccessToken();

      console.log('authState user: ', user.email);

      console.log('Token from state: ', user.authToken)

    });

  }

  accessToken = '';

  user: any;

  googleClientId = '848983964634-l65hjj1kfa82qm0uejmeebghric7njsk.apps.googleusercontent.com';

  getAccessToken(): void {

    console.log('getAccessToken')

    this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => this.accessToken = accessToken);

  }

  signOut(): void {
    this.authService.signOut();
  }
}
