import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

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
  showHeaders='true';

  constructor(private loginService: LoginService, private readonly googleAuth: SocialAuthService, private router: Router) { }

  ngOnInit(): void {

    let email = '';
    this.googleAuth.authState.subscribe((user: any) => {
      console.log("user", user)
      this.loginService.setemail(user.email)
      this.loginService.setfirstName(user.firstName)
      this.loginService.setlastName(user.lastName)
      this.email = user.email;
      this.getAccessToken();
    });
  }

  tmpmail = '';
  tmpLogin(data: NgForm) {

    let email = data.value.email;
  }

  googleLogin(email: any) {
    this.loginService.googleLogin(email).subscribe((result: any) => {
      console.log("res", result.email)
      // this.loginService.setemail(result.email)
      this.loginService.setRoles(result.roles);
      this.loginService.setToken(result.accessToken);

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

      if(role!=="ROLE_ADMIN" && role!=="ROLE_INVESTOR" && role!=="ROLE_CONTRACTOR"){
        Swal.fire("You Are UnAuthorised","Please Contect Admin","info");
        this.router.navigate(['/contectUs']);
      }
    });
  }


  getAccessToken(): void {
    this.googleAuth.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken =>
      this.accessToken = accessToken
    )
    this.googleLogin(this.email);
  }

  logOut() {
    this.googleAuth.signOut();
  }

}
