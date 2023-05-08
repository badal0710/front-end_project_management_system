import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export enum controllers {
  login = 'login',
  contractor = 'contractor',
  investor = 'investor'
}

const url = 'http://localhost:9090';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  constructor(private http: HttpClient) { }
  

  getRandomeJson(){
    return this.http.get('https://www.boredapi.com/api/activity');
  }

  validateLogin(body: any){
    return this.http.post(`${url}/${controllers.login}/login`,body);
  }


}
