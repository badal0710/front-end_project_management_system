import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { DATABASE_URL } from 'src/app/components/shared/helper/list';

@Injectable({
  providedIn: 'root'
})
export class InvestorService {

  // DATABASE_URL = 'http://localhost:9090';
  DATABASE_URL = DATABASE_URL;
  jwtToken = this.loginService.getToken();

  //controller
  investor = 'investor';

  //functions
  getOne = ''; 
  getAll = 'allInvestor';    
  count = 'totalInvestor';   
  create = 'create-investor';
  deleteOne = 'delete-investor';

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${this.jwtToken}`);
  }

  getAllInvestor() {
    const headers = this.getHeaders();
    return this.http.get(`${this.DATABASE_URL}/${this.investor}/${this.getAll}`,{ headers });
  }

  totalInvestor() {
    const headers = this.getHeaders();
    return this.http.get(`${this.DATABASE_URL}/${this.investor}/${this.count}`,{ headers });
  }

  createInvestor(body: any) {
    const headers = this.getHeaders();
    return this.http.post(`${this.DATABASE_URL}/${this.investor}/${this.create}`, body,{ headers });
  }

  deleteInvestor(id: any) {
    const headers = this.getHeaders();
    return this.http.delete(`${this.DATABASE_URL}/${this.investor}/${this.deleteOne}/${id}`,{ headers });
  }

}
