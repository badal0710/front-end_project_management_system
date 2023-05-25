import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartData } from 'chart.js';

import { AdminService } from 'src/app/services/admin/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router, private readonly googleAuth: SocialAuthService) { }


  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty    
    // alert(sessionStorage.getItem('UPN'));
    // this.authorizeUser('admin');
  }

  // authorizeUser(type:any){
  //   if(sessionStorage.getItem('UPN')===null) {
  //     Swal.fire('YOU ARE UNAUTHORIZED','Please Login to Continue');
  //     this.router.navigateByUrl('/login');
  //   }else{
  //     this.adminService.authorizeUser(sessionStorage.getItem('UPN'),type).subscribe((result:any)=>{
  //       if(result!=1){
  //         Swal.fire('YOU ARE UNAUTHORIZED','You Cannot have a Access of This Page');
  //         sessionStorage.clear();
  //         this.googleAuth.signOut();
  //         this.router.navigateByUrl('/login');
  //       }
  //     });
  //   }
  // }

}
