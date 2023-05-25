import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from '../login/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class InvestorProjectServiceService {

  constructor(private http: HttpClient, private authservice: UserAuthService) { }

  database_url = 'http://localhost:9090';

  jwtToken = this.authservice.getToken();

  investorProjectController = 'projectInvestor';

  /*
   * @GetMapping("/getInvestedAmount/{email}/{projectid}")
  */
  investedAmount = 'getInvestedAmount';

  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${this.jwtToken}`);
  }

  getInvestedAmount(email:string|null,projectId:number){
    console.log("received email: ",email);
    const headers = this.getHeaders();
    return this.http.get(`${this.database_url}/${this.investorProjectController}/${this.investedAmount}/${email}/${projectId}`,{ headers });
  }

}
