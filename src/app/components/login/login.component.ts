import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username='';
  password='';
  email='';
  accessToken='';
  googleClientId = '848983964634-l65hjj1kfa82qm0uejmeebghric7njsk.apps.googleusercontent.com';
  
  constructor(private loginService:LoginService, private readonly googleAuth: SocialAuthService, private router:Router){}

  ngOnInit(): void {

    let email='';
    this.googleAuth.authState.subscribe( (user: any)=>{
      this.email=user.email;
      this.getAccessToken();
    });

    
  }

  login(){
    let body = {
      "upn":this.username,
      "psw":this.password
    }
    this.loginService.login(body).subscribe((result:any)=>{
      this.navigateMe(result);
    });
  }

  googleLogin(email:any){
    this.loginService.googleLogin(email).subscribe((result:any)=>{
      this.navigateMe(result); 
    });
  }

  getAccessToken(): void{
    this.googleAuth.getAccessToken(GoogleLoginProvider.PROVIDER_ID)
    .then(accessToken => 
        this.accessToken = accessToken
      )
    this.googleLogin(this.email);
  }

  logOut(){
    this.googleAuth.signOut();
  }

  navigateMe(result:any){
    if(result===1){
      this.router.navigateByUrl('/admin')
    }else if(result===2){
      this.router.navigateByUrl('/investor')
    }else if(result===3){
      this.router.navigateByUrl('/contractor')
    }else{
      this.router.navigateByUrl('/errorPage')
    }
  }


}
