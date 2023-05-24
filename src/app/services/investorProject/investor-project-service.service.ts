import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvestorProjectServiceService {

  constructor(private http: HttpClient) { }

  database_url = 'http://localhost:9090';

  investorProjectController = 'projectInvestor';

  /*
   * @GetMapping("/getInvestedAmount/{email}/{projectid}")
  */
  investedAmount = 'getInvestedAmount';

  getInvestedAmount(email:string|null,projectId:number){
    return this.http.get(`${this.database_url}/${this.investorProjectController}/${this.investedAmount}/${email}/${projectId}`);
  }

}
