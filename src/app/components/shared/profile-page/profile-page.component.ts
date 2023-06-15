import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {

  email = this.loginService.getemail();
  firstName = this.loginService.getfirstName();
  lastName = this.loginService.getlastName();
  constructor(private http: HttpClient, private loginService: LoginService) { }

}
