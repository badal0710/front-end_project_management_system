import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DATABASE_URL } from 'src/app/util/config/configuration';
import { enum_controllers } from 'src/app/util/enum/enum_controllers';
import { enum_functions } from 'src/app/util/enum/enum_functions_of_controllers';

@Injectable({
  providedIn: 'root'
})
export class InvestorService {

  constructor(private http: HttpClient) { }

  getAllProjectOfOneInvestor(email: any){
    return this.http.get(`${DATABASE_URL}/${enum_controllers.projectController}/${enum_functions.projectController_getAllProjectOfOneInvestor}/${email}`);
  }

}
