import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { DATABASE_URL } from 'src/app/components/shared/helper/list';

@Injectable({
  providedIn: 'root'
})
export class ProjectLocationService {

  // DATABASE_URL = 'http://localhost:9090';
  database_url = DATABASE_URL;
  jwtToken = this.loginService.getToken();

  //controller
  projectLocation = 'projectbylocation';

  //function
  all = 'allLocation';
  create = 'create-location';

  constructor(private http: HttpClient, private loginService: LoginService) { }
  
  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${this.jwtToken}`);
  }

  getAllLocation(){
    const headers = this.getHeaders();
    return this.http.get(`${this.database_url}/${this.projectLocation}/${this.all}`,{ headers });
  }

  async createLocation(body:any){
    const headers = this.getHeaders();
    return this.http.post(`${this.database_url}/${this.projectLocation}/${this.create}`,body,{ headers });
    
  }

}
