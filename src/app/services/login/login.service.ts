import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enum_controllers } from 'src/app/util/enum/enum_controllers';
import { DATABASE_URL } from 'src/app/util/config/configuration';
import { enum_functions } from 'src/app/util/enum/enum_functions_of_controllers';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  constructor(private http: HttpClient) { }

  login(body: any){
    return this.http.post(`${DATABASE_URL}/${enum_controllers.user}/${enum_functions.user_login}`,body);
  }

  googleLogin(email: any){
    return this.http.get(`${DATABASE_URL}/${enum_controllers.user}/${enum_functions.user_getUser}/${email}`);
  }

}
