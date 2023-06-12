import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { DATABASE_URL } from 'src/app/components/shared/helper/list';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDetailService {

  // DATABASE_URL = 'http://localhost:9090';
  database_url = DATABASE_URL;
  jwtToken = this.loginService.getToken();
  
  //controller
  projectController = 'project';

  //function
  create = 'create-project';
  AllProjectOfOneInvestor = 'getAllProjectOfOneInvestor';
  getOne = '';
  getAll = 'AllProjects';
  update = 'update-project';
  delete = 'delete-project';
  projectInvestor = 'project-investor';
  taskDetail = 'task-details';
  projectStatusDate = 'project-status-date';
  countProject = 'totalProject';
  

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${this.jwtToken}`);
  }


  getAllProject(){
    const headers = this.getHeaders();
    return this.http.get(`${this.database_url}/${this.projectController}/${this.getAll}`,{ headers });
  }

  getOneProject(id:any){
    const headers = this.getHeaders();
    return this.http.get(`${this.database_url}/${this.projectController}/${this.getOne}${id}`,{ headers });
  }

  deleteProject(id: any){
    const headers = this.getHeaders();
    return this.http.delete(`${this.database_url}/${this.projectController}/${this.delete}/${id}`,{ headers });
  }

  updateProject(body: any, id: any){
   
    const headers = this.getHeaders();
    return this.http.put(`${this.database_url}/${this.projectController}/${this.update}/${id}`,body,{ headers });
  }

  getAllProjectOfOneInvestor(email:string|null){
    const headers = this.getHeaders();
    return this.http.get(`${this.database_url}/${this.projectController}/${this.AllProjectOfOneInvestor}/${email}`,{ headers });
  }

  totalProject() {
    const headers = this.getHeaders();
    return this.http.get(`${this.database_url}/${this.projectController}/${this.countProject}`,{ headers });
  }

  createProject(body: any) {
    const headers = this.getHeaders();
    return this.http.post(`${this.database_url}/${this.projectController}/${this.create}`, body,{ headers });
  }


}
