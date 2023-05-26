import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectLocationService {

  database_url = 'http://localhost:9090';
  jwtToken = this.loginService.getToken();

  //controller
  projectLocation = 'projectbylocation';

  //function
  all = 'allLocation';

  constructor(private http: HttpClient, private loginService: LoginService) { }
  
  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${this.jwtToken}`);
  }

  getAllLocation(){
    const headers = this.getHeaders();
    return this.http.get(`${this.database_url}/${this.projectLocation}/${this.all}`,{ headers });
  }
}
