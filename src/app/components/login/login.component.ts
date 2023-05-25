import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/login/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  email = '';
  accessToken = '';
  googleClientId = '848983964634-l65hjj1kfa82qm0uejmeebghric7njsk.apps.googleusercontent.com';
  data: any;

  constructor(private loginService: LoginService, private readonly googleAuth: SocialAuthService, private router: Router, private userAuthService: UserAuthService) { }

  ngOnInit(): void {

    let email = '';
    this.googleAuth.authState.subscribe((user: any) => {
      console.log(user);
      // this.email = user.firstName;
      this.email = user.email;
      this.getAccessToken();
    });
  }

  // public isLoggedIn() {
  //   return this.userAuthService.isLoggedIn(this.data);
  // }

  // manageState(email: any) {
  //   sessionStorage.setItem('UPN', email);
  // }

  // login() {
  //   let body = {
  //     "upn": this.username,
  //     "psw": this.password
  //   }
  //   this.loginService.googleLogin(body).subscribe((result: any) => {
  //     console.log(result);
  //     // this.navigateMe(result);
  //   });
  // }

  googleLogin(email: any) {
    this.loginService.googleLogin(email).subscribe((result: any) => {

      this.userAuthService.setRoles(result.roles);
      this.userAuthService.setToken(result.accessToken);

      const role = result.roles[0];
      if (role === 'ROLE_INVESTOR') {
        localStorage.setItem("UPN", email);
        localStorage.setItem("ROLE", "Investor");
        this.router.navigate(['/investor'])
      }
      if (role === 'ROLE_CONTRACTOR') {
        localStorage.setItem("UPN", email);
        localStorage.setItem("ROLE", "Contractor");
        this.router.navigate(['/contractor'])
      }
      if (role === "ROLE_ADMIN") {
        localStorage.setItem("UPN", email);
        localStorage.setItem("ROLE", "Admin");
        this.router.navigate(['/admin'])
      }
      // this.manageState(email);
      // this.navigateMe(result);
    });
  }

  getAccessToken(): void {
    this.googleAuth.getAccessToken(GoogleLoginProvider.PROVIDER_ID)
      .then(accessToken =>
        this.accessToken = accessToken
      )
    this.googleLogin(this.email);
  }

  logOut() {
    this.googleAuth.signOut();
  }



  // navigateMe(result: any) {
  //   if (result === 1) {
  //     this.router.navigateByUrl('/admin')
  //   } else if (result === 2) {
  //     this.router.navigateByUrl('/investor')
  //   } else if (result === 3) {
  //     this.router.navigateByUrl('/contractor')
  //   } else {
  //     this.router.navigateByUrl('/errorPage')
  //   }
  // }


}
