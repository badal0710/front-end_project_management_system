import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class TaskdetailService {

  DATABASE_URL = 'http://localhost:9090';
  jwtToken = this.loginService.getToken();

  taskDetail = 'taskofproject';
  project = 'project';

  allTask = "all-task";
  create = 'create-task';
  update = 'update-task';
  delete = 'delete-task';
  oneTask = 'getOneTask';
  allTaskOfOneProject = 'task-details';

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${this.jwtToken}`);
  }

  getAllTasks(){
    const headers = this.getHeaders();
    return this.http.get(`${this.DATABASE_URL}/${this.taskDetail}/${this.allTask}`,{ headers });
  }

  getOneTask(id:any){
    const headers = this.getHeaders();
    return this.http.get(`${this.DATABASE_URL}/${this.taskDetail}/${this.oneTask}/${id}`,{ headers });
  }

  getAllTaskOfOneProject(id:any){
    const headers = this.getHeaders();
    return this.http.get(`${this.DATABASE_URL}/${this.project}/${this.allTaskOfOneProject}/${id}/filterDates`,{ headers });
  }

  updateTask(body: any, id: any) {
    return this.http.put(`${this.DATABASE_URL}/${this.taskDetail}/${this.update}/${id}`, body);
  }

  deleteTask(id: any) {
    return this.http.delete(`${this.DATABASE_URL}/${this.taskDetail}/${this.delete}/${id}`);
  }

  createTask(body: any) {
    return this.http.post(`${this.DATABASE_URL}/${this.taskDetail}/${this.create}`, body);
  }
  
}
