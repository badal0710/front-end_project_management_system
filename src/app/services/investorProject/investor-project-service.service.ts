import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';



@Injectable({
  providedIn: 'root'
})
export class InvestorProjectServiceService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  database_url = 'http://localhost:9090';
  jwtToken = this.loginService.getToken();

  //controller
  projectInvestor = 'projectInvestor';

  //function
  investedAmount = 'getInvestedAmount';

  create = 'create';
  deleteOne = 'delete';
  getAll = 'getAll';

  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${this.jwtToken}`);
  }

  getInvestedAmount(email:string|null,projectId:number){
    const headers = this.getHeaders();
    return this.http.get(`${this.database_url}/${this.projectInvestor}/${this.investedAmount}/${email}/${projectId}`,{ headers });
  }

  deleteProjectInvestor(id: any) {
    return this.http.delete(`${this.database_url}/${this.projectInvestor}/${this.deleteOne}/${id}`);
  }

  createProjectInvestor(body: any) {
    return this.http.post(`${this.database_url}/${this.projectInvestor}/${this.create}`, body);
  }

  getAllProjectInvestor() {
    return this.http.get(`${this.database_url}/${this.projectInvestor}/${this.getAll}`);
  }

}
