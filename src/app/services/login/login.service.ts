import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enum_controllers } from 'src/app/util/enum/enum_controllers';
import { DATABASE_URL } from 'src/app/util/config/configuration';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  constructor(private http: HttpClient) { }
  

  getRandomeJson(){
    return this.http.get('https://www.boredapi.com/api/activity');
  }

  validateLogin(body: any){
    return this.http.post(`${DATABASE_URL}/${enum_controllers.login}/login`,body);
  }

}
