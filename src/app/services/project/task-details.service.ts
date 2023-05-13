import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskDetailsService {

  private apiUrl = 'http://localhost:9090/project/task-details/1/filterDates';

  constructor(private http: HttpClient) { }

  getData(id:any): Observable<any> {
    return this.http.get(this.apiUrl);


  }




  // gettaskdetailsbyprojectId():Observable<any>{
  //   let params1= new HttpParams(). 
     
  // }


}
