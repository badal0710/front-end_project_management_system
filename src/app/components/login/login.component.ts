import { Component } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private loginService:LoginService){}

  username='';
  password='';
  rememberMe=false;


  submit(){
    console.log("username: ",this.username,"\npassword: ",this.password,"\nrememberMe: ",this.rememberMe);
    this.loginService.validateLogin({"username":this.username,"password":this.password}).subscribe((result:any)=>{
      console.log(result);
    });
  }


}
