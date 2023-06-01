import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { DATABASE_URL } from 'src/app/components/shared/helper/list';

@Injectable({
  providedIn: 'root'
})
export class ContractorService {

  DATABASE_URL = DATABASE_URL;
  jwtToken = this.loginService.getToken();

  //controller
  contractor = 'contractor';

  //functions
  create = 'create-contractor';
  update = 'update-contractor';
  delete = 'delete-contractor';
  getOne = '';
  getAll = 'allContractor';
  count = 'totalContractor';

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${this.jwtToken}`);
  }

  getAllContractor() {
    const headers = this.getHeaders();
    return this.http.get(`${this.DATABASE_URL}/${this.contractor}/${this.getAll}`,{ headers });
  }

  totalContractor() {
    const headers = this.getHeaders();
    return this.http.get(`${this.DATABASE_URL}/${this.contractor}/${this.count}`,{ headers });
  }

  createContractor(body: any) {
    const headers = this.getHeaders();
    return this.http.post(`${this.DATABASE_URL}/${this.contractor}/${this.create}`, body,{ headers });
  }

  deleteContractor(id: any) {
    const headers = this.getHeaders();
    return this.http.delete(`${this.DATABASE_URL}/${this.contractor}/${this.delete}/${id}`,{ headers });
  }

}
