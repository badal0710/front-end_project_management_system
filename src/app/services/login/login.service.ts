import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  database_url = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

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
