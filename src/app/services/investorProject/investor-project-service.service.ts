import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { DATABASE_URL } from 'src/app/components/shared/helper/list';

@Injectable({
  providedIn: 'root'
})

export class InvestorProjectServiceService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  // DATABASE_URL = 'http://localhost:9090';
  database_url = DATABASE_URL;
  jwtToken = this.loginService.getToken();

  //controller
  projectInvestor = 'projectInvestor';

  //function
  investedAmount = 'getInvestedAmount';
  notInvestedProjects = 'get-not-invested-projects';
  accept = 'accept-investment';

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

  getNotInvestedProjects(email:string|null){
    const headers = this.getHeaders();
    return this.http.get(`${this.database_url}/${this.projectInvestor}/${this.notInvestedProjects}/${email}`,{ headers });
  }

  deleteProjectInvestor(id: any) {
    const headers = this.getHeaders();
    return this.http.delete(`${this.database_url}/${this.projectInvestor}/${this.deleteOne}/${id}`,{ headers });
  }

  createProjectInvestor(body: any,investor_id:any) {
    const headers = this.getHeaders();
    return this.http.post(`${this.database_url}/${this.projectInvestor}/${this.create}/${investor_id}`, body,{ headers });
  }

  getAllProjectInvestor() {
    const headers = this.getHeaders();
    return this.http.get(`${this.database_url}/${this.projectInvestor}/${this.getAll}`,{ headers });
  }

  acceptInvestmentRequest(id:any){
    // const headers = this.getHeaders();
    return this.http.put(`${this.database_url}/${this.projectInvestor}/${this.accept}/${id}`,id);
  }

}
