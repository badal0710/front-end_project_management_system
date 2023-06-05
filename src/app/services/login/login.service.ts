import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DATABASE_URL } from 'src/app/components/shared/helper/list';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  database_url = DATABASE_URL;

  constructor(private http: HttpClient) { }

  userSignUp(body:any){
    return this.http.post(`${this.database_url}/api/auth/signup`, body);
  }

  authorizeUser(email: any) {
    return this.http.post(`${this.database_url}/api/auth/signin`, email);
  }

  googleLogin(email: any) {
    return this.http.post(`${this.database_url}/api/auth/signin/`, email);
  }

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles() {
    return localStorage.getItem('roles');
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken() {
    return localStorage.getItem('jwtToken');
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }

}
