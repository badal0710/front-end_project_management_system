import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enum_controllers } from 'src/app/util/enum/enum_controllers';
import { DATABASE_URL } from 'src/app/util/config/configuration';
import { enum_functions } from 'src/app/util/enum/enum_functions_of_controllers';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient, private userAuthService: UserAuthService) { }

  login(body: any) {
    return this.http.post(`${DATABASE_URL}/${enum_controllers.user}/${enum_functions.user_login}`, body);
  }

  googleLogin(email: any) {
    return this.http.post(`${DATABASE_URL}/api/auth/signin/`, email);
  }

  // public roleMatch(allowedRoles: any): any {
  //   let isMatch = false;

  //   const userRoles: any = this.userAuthService.getRoles(allowedRoles);
  //   if (userRoles != null && userRoles) {
  //     for (let i = 0; i < userRoles.length; i++) {
  //       for (let j = 0; j < allowedRoles.length; j++) {
  //         if (userRoles[i] === allowedRoles[j]) {
  //           isMatch = true;
  //           return isMatch;
  //         }
  //         else {
  //           return isMatch;
  //         }
  //       }
  //     }
  //   }

  // }

}
