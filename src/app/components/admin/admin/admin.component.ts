import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartData } from 'chart.js';


import { LoginService } from 'src/app/services/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router, private readonly googleAuth: SocialAuthService) { }


  ngOnInit(): void {
    this.authorizeUser('ROLE_ADMIN');
  }

  authorizeUser(type: any) {
    if (localStorage.getItem('UPN') === null) {
      Swal.fire('YOU ARE UNAUTHORIZED', 'Please Login to Continue','error');
      localStorage.clear();
      this.router.navigateByUrl('/login');
    } else {
      this.loginService.authorizeUser(localStorage.getItem('UPN')).subscribe((result: any) => {
        if (result.roles[0] !== type) {
          Swal.fire('YOU ARE UNAUTHORIZED', 'You Cannot have a Access of This Page','error');
          localStorage.clear();
          this.googleAuth.signOut();
          this.router.navigateByUrl('/login');
        }
      });
    }
  }

}
