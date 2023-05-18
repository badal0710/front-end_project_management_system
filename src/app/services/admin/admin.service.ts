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

  authorizeUser(email:any,type:any){
    return this.http.get(`${DATABASE_URL}/${enum_controllers.user}/${enum_functions.user_authorizeUser}/${email}/${type}`);
  }

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

  getAllInvestor(){
    return this.http.get(`${DATABASE_URL}/${enum_controllers.investor}/${enum_functions.investor_getAllInvestor}`);
  }

  getAllContractor(){
    return this.http.get(`${DATABASE_URL}/${enum_controllers.contractor}/${enum_functions.contractor_getAllContractor}`);
  }

  getAllProjectInvestor(){
    return this.http.get(`${DATABASE_URL}/${enum_controllers.projectInvestor}/${enum_functions.projectInvestor_getAll}`);
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
    return this.http.post(`${DATABASE_URL}/${enum_controllers.investor}/${enum_functions.investor_createInvestor}`,body);
  }

  createProjectInvestor(body:any){
    return this.http.post(`${DATABASE_URL}/${enum_controllers.projectInvestor}/${enum_functions.projectInvestor_create}`,body); 
  }

  deleteProjectInvestor(id: any){
    return this.http.delete(`${DATABASE_URL}/${enum_controllers.projectInvestor}/${enum_functions.projectInvestor_deleteOne}/${id}`);
  }

  deleteProject(id: any){
    return this.http.delete(`${DATABASE_URL}/${enum_controllers.projectController}/${enum_functions.projectController_deleteProject}/${id}`);
  }

  deleteInvestor(id:any){
    return this.http.delete(`${DATABASE_URL}/${enum_controllers.investor}/${enum_functions.investor_deleteOne}/${id}`);
  }

  deleteContractor(id:any){
    return this.http.delete(`${DATABASE_URL}/${enum_controllers.contractor}/${enum_functions.contractor_deleteContractor}/${id}`);
  }

  deleteTask(id:any){
    return this.http.delete(`${DATABASE_URL}/${enum_controllers.taskDetail}/${enum_functions.taskDetail_deleteTask}/${id}`);
  }

  updateProject(body: any, id: any){
    return this.http.put(`${DATABASE_URL}/${enum_controllers.projectController}/${enum_functions.projectController_updateProject}/${id}`,body);
  }

  updateTask(body: any, id: any){
    return this.http.put(`${DATABASE_URL}/${enum_controllers.taskDetail}/${enum_functions.taskDetail_updateTask}/${id}`,body);
  }

  updateInvestor(body: any, id: any){
    return this.http.put(`${DATABASE_URL}/${enum_controllers.investor}/${enum_functions.projectController_updateProject}/${id}`,body);
  }

  updateContractor(body: any, id: any){
    return this.http.put(`${DATABASE_URL}/${enum_controllers.contractor}/${enum_functions.contractor_updateContractor}/${id}`,body);
  }

}
