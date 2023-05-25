import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.css']
})
export class ContractorComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router, private readonly googleAuth: SocialAuthService) { }

  ngOnInit(): void {
    // this.authorizeUser('contractor');
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
