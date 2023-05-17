import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DATABASE_URL } from 'src/app/util/config/configuration';
import { enum_controllers } from 'src/app/util/enum/enum_controllers';
import { enum_functions } from 'src/app/util/enum/enum_functions_of_controllers';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllProject(){
    return this.http.get(`${DATABASE_URL}/${enum_controllers.projectController}/${enum_functions.projectController_getAllProject}`);
  }

  getOneProject(id:any){
    return this.http.get(`${DATABASE_URL}/${enum_controllers.projectController}/${enum_functions.projectController_getOneProject}/${id}`);
  }

  getOneTask(id:any){
    return this.http.get(`${DATABASE_URL}/${enum_controllers.taskDetail}/${enum_functions.taskDetail_getOneTask}/${id}`);
  }

  getAllTaskOfOneProject(id:any){
    return this.http.get(`${DATABASE_URL}/${enum_controllers.projectController}/${enum_functions.projectController_taskDetail}/${id}/filterDates`);
  }

  getAllTasks(){
    return this.http.get(`${DATABASE_URL}/${enum_controllers.taskDetail}/${enum_functions.taskDetail_allTask}`);
  }

  updateProject(body: any, id: any){
    return this.http.put(`${DATABASE_URL}/${enum_controllers.projectController}/${enum_functions.projectController_updateProject}/${id}`,body);
  }

  deleteProject(id: any){
    return this.http.delete(`${DATABASE_URL}/${enum_controllers.projectController}/${enum_functions.projectController_deleteProject}/${id}`);
  }

  getAllInvestor(){
    return this.http.get(`${DATABASE_URL}/${enum_controllers.investor}/${enum_functions.investor_getAllInvestor}`);
  }

  getAllContractor(){
    return this.http.get(`${DATABASE_URL}/${enum_controllers.contractor}/${enum_functions.contractor_getAllContractor}`);
  }

  totalContractor(){
    return this.http.get(`${DATABASE_URL}/${enum_controllers.contractor}/${enum_functions.contractor_countContractor}`);
  }

  totalInvestor(){
    return this.http.get(`${DATABASE_URL}/${enum_controllers.investor}/${enum_functions.investor_countInvestor}`);
  }

  totalProject(){
    return this.http.get(`${DATABASE_URL}/${enum_controllers.projectController}/${enum_functions.projectController_countProject}`);
  }

  createProject(body:any){
    return this.http.post(`${DATABASE_URL}/${enum_controllers.projectController}/${enum_functions.projectController_createProject}`,body);
  }

  createTask(body:any){
    return this.http.post(`${DATABASE_URL}/${enum_controllers.taskDetail}/${enum_functions.taskDetail_createTask}`,body);
  }

  createContractor(body:any){
    return this.http.post(`${DATABASE_URL}/${enum_controllers.contractor}/${enum_functions.contractor_createContractor}`,body);
  }

  createInvestor(body:any){
    return this.http.post(`${DATABASE_URL}/${enum_controllers.investor}`,body);
  }

}
